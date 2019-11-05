import { utils } from '../../utils/utils';
import { DOM } from '../../utils/dom';
import { Locale } from '../locale/locale';
import { stringUtils } from '../../utils/string';
import { dateUtils } from '../../utils/date';
import { CalendarToolbar } from '../calendar-toolbar/calendar-toolbar';
import { calendarShared } from '../calendar/calendar-shared';

// Settings and Options
const COMPONENT_NAME = 'weekview';

const COMPONENT_NAME_DEFAULTS = {
  eventTypes: [
    { id: 'example', label: 'Example', color: 'emerald07', checked: true, click: () => {} },
  ],
  filteredTypes: [],
  events: [],
  locale: null,
  firstDayOfWeek: 0,
  startDate: null,
  endDate: null,
  showAllDay: true,
  startHour: 7,
  endHour: 19,
  showToday: true,
  showViewChanger: true,
  onChangeView: null,
  onChangeWeek: null
};

/**
 * WeekView - Renders a Week View Calendar
 * @class WeekView
 * @param {string} element The plugin element for the constuctor
 * @param {object} [settings] The settings element.
 * @param {array} [settings.eventTypes] An array of objects with data for the event types.
 * @param {array} [settings.events] An array of objects with data for the events.
 * @param {string} [settings.locale] The name of the locale to use for this instance. If not set the current locale will be used.
 * @param {date} [settings.startDate] Start of the week to show.
 * @param {date} [settings.endDate] End of the week to show.
 * @param {boolean} [settings.firstDayOfWeek=0] Set first day of the week. '1' would be Monday.
 * @param {boolean} [settings.showAllDay=true] Detemines if the all day events row should be shown.
 * @param {number} [settings.startHour=7] The hour (0-24) to end on each day.
 * @param {number} [settings.endHour=19] The hour (0-24) to end on each day.
 * @param {boolean} [settings.showToday=true] Deterimines if the today button should be shown.
 * @param {boolean} [settings.showViewChanger] If false the dropdown to change views will not be shown.
 * @param {function} [settings.onChangeView] Call back for when the view changer is changed.
 * @param {function} [settings.onChangeWeek] Call back for when the week is changed.
 */
function WeekView(element, settings) {
  this.settings = utils.mergeSettings(element, settings, COMPONENT_NAME_DEFAULTS);
  this.element = $(element);
  this.init();
}

// Plugin Methods
WeekView.prototype = {

  /**
   * Do initialization, build up and / or add events ect.
   * @private
   * @returns {object} The Component prototype, useful for chaining.
   */
  init() {
    // Do initialization. Build or Events ect
    if (!this.settings.startDate) {
      this.settings.startDate = dateUtils.firstDayOfWeek(new Date(), this.settings.firstDayOfWeek);
    }

    if (!this.settings.endDate) {
      this.settings.endDate = dateUtils.lastDayOfWeek(new Date(), this.settings.firstDayOfWeek);
    }

    return this.build();
  },

  /**
   * Set current locale to be used
   * @private
   * @returns {void}
   */
  setLocale() {
    if (this.settings.locale && (!this.locale || this.locale.name !== this.settings.locale)) {
      Locale.getLocale(this.settings.locale).done((locale) => {
        this.locale = Locale.cultures[locale];
        this.setCurrentCalendar();
        this.build().handleEvents();
      });
    } else if (!this.settings.locale) {
      this.locale = Locale.currentLocale;
    }
  },

  /**
   * Set current calendar
   * @private
   * @returns {void}
   */
  setCurrentCalendar() {
    this.currentCalendar = Locale.calendar(this.locale.name, this.settings.calendarName);
    this.isIslamic = this.currentCalendar.name === 'islamic-umalqura';
    this.isRTL = this.locale.direction === 'right-to-left';
    this.conversions = this.currentCalendar.conversions;
  },

  /**
   * Add any needed markup to the component.
   * @private
   * @returns {object} The WeekView prototype, useful for chaining.
   */
  build() {
    this.setLocale();
    if (this.rendered ||
      (this.settings.locale && (!this.locale || this.locale.name !== this.settings.locale))) {
      // Defer loading
      this.rendered = false;
      return this;
    }

    this.rendered = true;
    this.addToolbar();
    this.showWeek(this.settings.startDate, this.settings.endDate);
    this.handleEvents();
    return this;
  },

  /**
   * Render all the events in the current view.
   * @private
   */
  renderAllEvents() {
    // Clone and sort the array
    const eventsSorted = this.settings.events.slice(0);
    eventsSorted.sort((a, b) => (a.starts < b.starts ? -1 : (a.starts > b.starts ? 1 : 0))); // eslint-disable-line
    this.removeAllEvents();

    for (let i = 0; i < eventsSorted.length; i++) {
      const event = eventsSorted[i];
      if (this.settings.filteredTypes.indexOf(event.type) > -1) {
        continue;
      }
      this.renderEvent(event);
    }
  },

  /**
   * Remove all events from the month.
   */
  removeAllEvents() {
    const events = this.element[0].querySelectorAll('.calendar-event');
    for (let i = 0; i < events.length; i++) {
      events[i].parentNode.removeChild(events[i]);
    }

    for (let i = 0; i < this.dayMap.length; i++) {
      this.dayMap[i].events = [];
    }
  },

  /**
   * Render a single event on the ui, use in the loop and other functions.
   * @private
   * @param  {object} event The event object.
   */
  renderEvent(event) {
    const startDate = new Date(event.starts);
    const startKey = stringUtils.padDate(
      startDate.getFullYear(),
      startDate.getMonth(),
      startDate.getDate(),
    );

    const endDate = new Date(event.ends);
    const endKey = stringUtils.padDate(
      endDate.getFullYear(),
      endDate.getMonth(),
      endDate.getDate()
    );

    const days = this.dayMap.filter(day => day.key >= startKey && day.key <= endKey);
    event.endKey = endKey;
    event.startKey = startKey;
    event = calendarShared.addCalculatedFields(
      event,
      this.locale,
      this.language,
      this.settings.eventTypes
    );

    // Event is only on this day
    if (days.length === 1 && !event.isAllDay) {
      this.appendEventToHours(days[0].elem, event);
    }

    if (days.length === 1 && event.isAllDay) {
      this.appendEventToAllDay(days[0].elem, event);
    }

    // Event extends multiple days or is all day
    if (days.length > 1) {
      // TODO
      for (let i = 0; i < days.length; i++) {
        let cssClass = i === 0 ? 'calendar-event-start' : 'calendar-event-continue';
        if (i === days.length - 1) {
          cssClass = 'calendar-event-ends';
        }
        this.appendEventToAllDay(days[i].elem, event, cssClass);
      }
    }
  },

  /*
   * Add the ui event to the container event day
   * @private
   * @param {object} container The container to append to
   * @param {object} event The event data object.
   * @param {string} cssClass An extra css class
   */
  appendEventToAllDay(container, event, cssClass) {
    const allDayContainer = container.querySelector('.week-view-all-day-wrapper');
    if (!allDayContainer) {
      return;
    }

    const node = document.createElement('a');
    DOM.addClass(node, 'calendar-event', event.color, cssClass);
    node.setAttribute('data-id', event.id);
    node.setAttribute('data-key', event.startKey);
    node.setAttribute('href', '#');

    if (cssClass === 'calendar-event-continue' || cssClass === 'calendar-event-ends') {
      node.setAttribute('tabindex', '-1');
    }

    node.innerHTML = `<div class="calendar-event-content">
      ${event.icon ? `<span class="calendar-event-icon"><svg class="icon ${event.icon}" focusable="false" aria-hidden="true" role="presentation" data-status="${event.status}"><use xlink:href="#${event.icon}"></use></svg></span>` : ''}
      <span class="calendar-event-title">${event.shortSubject || event.subject}</span>
    </div>`;

    const containerEvents = allDayContainer.querySelectorAll('.calendar-event');
    const eventCount = containerEvents.length;

    if (eventCount >= 1) {
      node.style.top = `${22 * eventCount}px`;
    }
    if (eventCount > 2) {
      const nodes = this.element[0].querySelectorAll('.week-view-all-day-wrapper');
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].style.height = `${44 + ((eventCount - 1) * 23)}px`;
      }
    }
    allDayContainer.appendChild(node);
  },

  /**
   * Add the ui event to the container spanning hours
   * @private
   * @param {object} container The container to append to
   * @param {object} event The event data object.
   */
  appendEventToHours(container, event) {
    const dayHourContainers = this.element[0].querySelectorAll(`td:nth-child(${container.cellIndex + 1})`);
    for (let i = 0; i < dayHourContainers.length; i++) {
      const tdEl = dayHourContainers[i];
      const hour = tdEl.parentNode.getAttribute('data-hour');
      const startsHere = parseFloat(hour, 10) === event.startsHour;

      if (startsHere) {
        let duration = event.endsHour - event.startsHour;
        let displayedTime = '';
        const node = document.createElement('a');
        DOM.addClass(node, 'calendar-event', event.color);
        node.setAttribute('data-id', event.id);
        node.setAttribute('data-key', event.startKey);
        node.setAttribute('href', '#');

        if (duration < 0.5) {
          DOM.addClass(node, 'reduced-padding', event.color);
        }

        if (duration < 1.5) {
          DOM.addClass(node, 'is-ellipsis');
        }

        if (duration > 2) {
          displayedTime = ` ${Locale.formatHourRange(event.startsHour, event.endsHour, { locale: this.locale })}`;
        }

        // Max out at the bottom and show the time
        if (event.startsHour + duration > this.settings.endHour) {
          DOM.addClass(node, 'is-cutoff', event.color);
          duration = this.settings.endHour + 1 - event.startsHour;
        }

        if (duration < 0.25) {
          duration = 0.25;
        }

        // Add one per half hour + 1 px for each border crossed
        node.style.height = `${25 * (duration * 2) + (1.5 * duration)}px`;

        node.innerHTML = `<div class="calendar-event-content">
          ${event.icon ? `<span class="calendar-event-icon"><svg class="icon ${event.icon}" focusable="false" aria-hidden="true" role="presentation" data-status="${event.status}"><use xlink:href="#${event.icon}"></use></svg></span>` : ''}
          <span class="calendar-event-title">${event.shortSubject || event.subject}${displayedTime}</span>
        </div>`;

        const containerWrapper = tdEl.querySelector('.week-view-cell-wrapper');
        const containerEvents = tdEl.querySelectorAll('.calendar-event');
        const eventCount = containerEvents.length;

        if (eventCount > 0) {
          const width = (100 / (eventCount + 1));
          let j = 0;
          for (j = 0; j < eventCount; j++) {
            containerEvents[j].style.width = `${width}%`;
            if (j > 0) {
              containerEvents[j].style.left = `${width * j}%`;
            }
          }
          node.style.width = `${width}%`;
          node.style.left = `${width * j}%`;
        }
        containerWrapper.appendChild(node);
      }
    }
  },

  /**
   * Update the weekview to show the given range of days.
   * @param {date} startDate The start of the week or range.
   * @param {date} endDate The end of the week or range.
   * @returns {void}
   */
  showWeek(startDate, endDate) {
    this.numberOfDays = Math.round((endDate - startDate) / (1000 * 60 * 60 * 24));
    this.dayMap = [];
    this.isDayView = false;

    if (this.numberOfDays === 0 || this.numberOfDays === 1) {
      this.element.addClass('is-day-view');
      this.isDayView = true;
      this.element.find('#calendar-view-changer').val('day').trigger('updated');
    }
    if (this.numberOfDays !== 7) {
      this.hasIrregularDays = true;
    }

    // Create the header consisting of days in the range
    this.weekHeader = `<thead class="week-view-table-header"><tr><th><div class="week-view-header-wrapper"><span class="audible">${Locale.translate('Hour')}</span></div>`;
    if (this.settings.showAllDay) {
      this.weekHeader += `<div class="week-view-all-day-wrapper">${Locale.translate('AllDay', this.locale.name)}</div>`;
    }
    this.weekHeader += '</th>';

    for (let day = new Date(startDate.getTime()); day <= endDate; day.setDate(day.getDate() + 1)) {
      // TODO if this is 'dd EEEE' has wierd overflow
      const dayOfWeek = Locale.formatDate(day, { pattern: 'dd EEEE', locale: this.locale.name });
      this.weekHeader += `<th data-key="${stringUtils.padDate(day.getFullYear(), day.getMonth(), day.getDate())}"><div class="week-view-header-wrapper${dateUtils.isToday(day) ? ' is-today' : ''}">${dayOfWeek}</div>`;
      if (this.settings.showAllDay) {
        this.weekHeader += '<div class="week-view-all-day-wrapper"></div>';
      }
      this.weekHeader += '</th>';
    }
    this.weekHeader += '</tr></thead>';

    // Show the hours in the days
    this.weekBody = '<tbody>';
    for (let hour = this.settings.startHour; hour <= this.settings.endHour; hour++) {
      let weekRow = `<tr class="week-view-hour-row" data-hour="${hour}"><td><div class="week-view-cell-wrapper">${Locale.formatHour(hour, { locale: this.locale })}</div></td>`;
      let halfHourRow = `<tr class="week-view-half-hour-row" data-hour="${hour}.5"><td><div class="week-view-cell-wrapper"></div></td>`;

      for (let day = new Date(startDate.getTime()); day <= endDate; day.setDate(day.getDate() + 1)) { //eslint-disable-line
        weekRow += '<td><div class="week-view-cell-wrapper"></div></td>';
        halfHourRow += '<td><div class="week-view-cell-wrapper"></div></td>';
      }
      weekRow += '</tr>';
      halfHourRow += '</tr>';
      this.weekBody += weekRow + halfHourRow;
    }
    this.weekBody += '</tbody>';

    // Render the table and show the event
    this.weekContainer = `<div class="week-view-container"><table class="week-view-table">${this.weekHeader}${this.weekBody}</table></div>`;
    this.element.find('.week-view-container').remove();

    const args = { isDayView: this.isDayView, startDate, endDate, elem: this.element, api: this };

    /**
    * Fires as the calendar popup is opened.
    * @event weekrendered
    * @memberof WeekView
    * @property {object} event - The jquery event object
    * @property {object} args - The event arguments
    * @property {boolean} args.isDayView - True if one day is showing.
    * @property {object} args.startDate - The start date of the event
    * @property {object} args.endDate - The start date of the event
    * @property {object} args.elem - The current element.
    * @property {object} args.api - The WeekView api
    */
    this.element
      .append(this.weekContainer)
      .trigger('weekrendered', args);

    if (this.settings.onChangeWeek) {
      this.settings.onChangeWeek(args);
    }

    this.element.find('th').each((i, elem) => {
      const key = elem.getAttribute('data-key');
      if (key) {
        this.dayMap.push({ key, elem });
      }
    });

    // Add the time line and update the text on the month
    this.addTimeLine();
    this.showToolbarMonth(startDate, endDate);
    this.renderAllEvents();

    // Update currently set start and end date
    this.settings.startDate = startDate;
    this.settings.endDate = endDate;
  },

  /**
   * Update the weekview toolbar to show month(s) being show.
   * @private
   * @param {date} startDate The start of the week or range.
   * @param {date} endDate The end of the week or range.
   * @returns {void}
   */
  showToolbarMonth(startDate, endDate) {
    const startMonth = Locale.formatDate(startDate, { pattern: 'MMMM', locale: this.locale.name });
    const endMonth = Locale.formatDate(endDate, { pattern: 'MMMM', locale: this.locale.name });
    const startYear = Locale.formatDate(startDate, { pattern: 'yyyy', locale: this.locale.name });
    const endYear = Locale.formatDate(endDate, { pattern: 'yyyy', locale: this.locale.name });
    let monthStr = Locale.formatDate(endDate, { date: 'year', locale: this.locale.name });

    if (endMonth !== startMonth) {
      monthStr = `${Locale.formatDate(startDate, { pattern: 'MMM', locale: this.locale.name })} - ${Locale.formatDate(endDate, { pattern: 'MMMM yyyy', locale: this.locale.name })}`;
    }
    if (endYear !== startYear) {
      monthStr = `${Locale.formatDate(startDate, { pattern: 'MMM yyyy', locale: this.locale.name })} - ${Locale.formatDate(endDate, { pattern: 'MMM yyyy', locale: this.locale.name })}`;
    }

    this.monthField.val(monthStr);
    this.calendarToolbarAPI.monthPickerApi.setSize();
  },

  /**
   * Add a time line on the weekview which moves.
   * @private
   */
  addTimeLine() {
    const setTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const mins = now.getMinutes();
      const diff = hours - this.settings.startHour + (mins / 60);
      // 53 is the size of one whole hour (25 + two borders)
      this.markers.css('top', ((diff) * 52));
    };

    if (!this.timeMarker) {
      this.element.find('.week-view-hour-row:nth-child(1) td').prepend('<div class="week-view-time-marker"></div>');
      this.markers = $('.week-view-time-marker');
      setTime();

      this.timer = setInterval(() => {
        setTime();
      }, 30 * 1000);
    }
  },

  /**
   * Add and invoke the toolbar
   * @private
   */
  addToolbar() {
    // Invoke the toolbar
    this.currentDate = new Date();
    this.header = $('<div class="week-view-header"><div class="calendar-toolbar"></div></div>').appendTo(this.element);
    this.calendarToolbarEl = this.header.find('.calendar-toolbar');
    this.calendarToolbarAPI = new CalendarToolbar(this.calendarToolbarEl[0], {
      onOpenCalendar: () => this.currentDate || this.settings.startDate,
      locale: this.settings.locale,
      year: this.currentYear,
      month: this.currentMonth,
      showToday: this.settings.showToday,
      isAlternate: false,
      isMenuButton: true,
      showViewChanger: this.settings.showViewChanger,
      onChangeView: this.settings.onChangeView,
      viewChangerValue: !this.isDayView ? 'week' : 'day'
    });
    this.monthField = this.header.find('#monthview-datepicker-field');
  },

  /**
   * Sets up event handlers for this component and its sub-elements.
   * @returns {object} The Calendar prototype, useful for chaining.
   * @private
   */
  handleEvents() {
    this.element.off(`updated.${COMPONENT_NAME}`).on(`updated.${COMPONENT_NAME}`, () => {
      this.updated();
    });

    this.element.off(`change-date.${COMPONENT_NAME}`).on(`change-date.${COMPONENT_NAME}`, (e, args) => {
      const startDate = args.isToday ? new Date() : args.selectedDate;
      this.currentDate = startDate;

      if (this.isDayView) {
        this.settings.startDate = startDate;
        this.settings.endDate = startDate;
      } else {
        this.settings.startDate = this.hasIrregularDays ? startDate :
          dateUtils.firstDayOfWeek(startDate, this.settings.firstDayOfWeek);
        this.settings.startDate.setHours(0, 0, 0, 0);

        this.settings.endDate = new Date(this.settings.startDate);
        this.settings.endDate.setDate(this.settings.endDate.getDate() + this.numberOfDays - 1);
        this.settings.endDate.setHours(23, 59, 59, 59);
      }
      this.showWeek(this.settings.startDate, this.settings.endDate);
    });

    this.element.off(`change-next.${COMPONENT_NAME}`).on(`change-next.${COMPONENT_NAME}`, () => {
      this.advanceDays(true);
    });

    this.element.off(`change-prev.${COMPONENT_NAME}`).on(`change-prev.${COMPONENT_NAME}`, () => {
      this.advanceDays(false);
    });

    const fireEvent = (target, eventName) => {
      const eventId = target.getAttribute('data-id');
      const eventData = this.settings.events.filter(event => event.id === eventId);
      if (!eventData || eventData.length === 0) {
        return;
      }
      /**
      * Fires as the calendar popup is opened.
      * @event eventclick
      * @memberof WeekView
      * @property {object} event - The jquery event object
      * @property {object} args - The event arguments
      * @property {object} args.settings - The current settings including start and end date.
      * @property {object} args.event - The event data.
      */
      /**
      * Fires as the calendar popup is opened.
      * @event eventdblclick
      * @memberof WeekView
      * @property {object} event - The jquery event object
      * @property {object} args - The event arguments
      * @property {object} args.settings - The current settings including start and end date.
      * @property {object} args.event - The event data.
      */
      this.element.trigger(eventName, { settings: this.settings, event: eventData[0] });
    };

    this.element.off(`click.${COMPONENT_NAME}`).on(`click.${COMPONENT_NAME}`, '.calendar-event', (e) => {
      fireEvent(e.currentTarget, 'eventclick');
    });

    this.element.off(`dblclick.${COMPONENT_NAME}`).on(`dblclick.${COMPONENT_NAME}`, '.calendar-event', (e) => {
      fireEvent(e.currentTarget, 'eventdblclick');
    });
    return this;
  },

  /**
   * Handle updated settings and values.
   * @param {boolean} advance Whether to go up or down in days.
   */
  advanceDays(advance) {
    let diff = (this.isDayView ? 1 : this.numberOfDays);
    if (!advance) {
      diff = -diff;
    }
    this.settings.startDate.setDate(this.settings.startDate.getDate() + diff);
    if (this.isDayView) {
      this.settings.endDate = new Date(this.settings.startDate);
      this.settings.startDate.setHours(0, 0, 0, 0);
      this.settings.endDate.setHours(23, 59, 59, 999);
    } else {
      this.settings.endDate.setDate(this.settings.endDate.getDate() + diff);
    }
    this.currentDate = this.settings.startDate;
    this.showWeek(this.settings.startDate, this.settings.endDate);
  },

  /**
   * Add a new event via the event object and show it if it should be visible in the calendar.
   * @param {object} event The event object with common event properties.
   */
  addEvent(event) {
    calendarShared.cleanEventData(
      event,
      true,
      this.settings.startDate,
      this.locale,
      this.language,
      this.settings.events,
      this.settings.eventTypes
    );

    this.settings.events.push(event);
    this.renderEvent(event);
  },

  /**
   * Remove all events from the calendar
   */
  clearEvents() {
    this.settings.events = [];
    this.renderAllEvents();
  },

  /**
   * Update an event via the event object and show it if it should be visible in the calendar.
   * It uses the event id to do this.
   * @param {object} event The event object with common event properties.
   */
  updateEvent(event) {
    const eventId = event.id;
    for (let i = this.settings.events.length - 1; i >= 0; i--) {
      if (this.settings.events[i].id === eventId) {
        this.settings.events[i] = utils.extend(true, this.settings.events[i], event);
        calendarShared.cleanEventData(
          this.settings.events[i],
          true,
          this.settings.startDate,
          this.locale,
          this.language,
          this.settings.events,
          this.settings.eventTypes
        );
      }
    }

    this.renderAllEvents();
  },

  /**
   * Remove an event from the dataset and page. It uses the id property.
   * @param {object} event The event object with common event properties.
   */
  deleteEvent(event) {
    const eventId = event.id;

    for (let i = this.settings.events.length - 1; i >= 0; i--) {
      if (this.settings.events[i].id === eventId) {
        this.settings.events.splice(i, 1);
      }
    }
    this.renderAllEvents();
  },

  /**
   * Handle updated settings and values.
   * @param {object} settings The new settings object to use.
   * @returns {object} [description]
   */
  updated(settings) {
    if (!settings) {
      settings = {};
    }
    if (settings) {
      this.settings = utils.mergeSettings(this.element[0], settings, this.settings);
    }
    if (settings.locale) {
      this.destroy().init();
      return this;
    }

    this.renderAllEvents();
    return this;
  },

  /**
   * Simple Teardown - remove events & rebuildable markup.
   * @returns {object} The Component prototype, useful for chaining.
   * @private
   */
  teardown() {
    this.element.off();
    clearInterval(this.timer);
    this.timer = null;
    return this;
  },

  /**
   * Destroy - Remove added markup and events.
   * @returns {object} The prototype.
   */
  destroy() {
    this.teardown();
    this.element.empty();
    $.removeData(this.element[0], COMPONENT_NAME);
    return this;
  }
};

export { WeekView, COMPONENT_NAME };
