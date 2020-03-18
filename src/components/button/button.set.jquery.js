import { ButtonSet, COMPONENT_NAME } from './button.set';

/**
 * jQuery Component Wrapper for the Soho Button Element
 * @param {object} [settings] incoming settings
 * @returns {jQuery[]} jQuery-wrapped components being acted on
 */
$.fn.buttonset = function jQueryButton(settings) {
  return this.each(function () {
    let instance = $.data(this, COMPONENT_NAME);
    if (instance) {
      instance.updated(settings);
    } else {
      instance = $.data(this, COMPONENT_NAME, new ButtonSet(this, settings));
    }
  });
};
