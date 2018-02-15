/* eslint-disable no-bitwise, no-undef */

// Get Latest from http://www.unicode.org/Public/cldr/25/
Soho.Locale.addCulture('fr-CA', {
  // layout/language
  language: 'fr',
  englishName: 'French (Canada)',
  nativeName: 'français (Canada)',
  // layout/orientation/@characters
  direction: 'left-to-right',
  // ca-gregorian
  calendars: [{
    name: 'gregorian',
    // ca-gregorian/main/dates/calendars/gregorian/dateFormats/
    dateFormat: {
      separator: '-', // Infered
      timeSeparator: ':',
      short: 'yyyy-MM-dd', // use four digit year
      medium: 'yyyy-MM-dd',
      long: 'd MMMM yyyyy',
      full: 'EEEE d MMMM yyyy',
      month: 'd MMMM',
      year: 'MMMM, yyyy',
      timestamp: 'HH:mm:ss',
      datetime: 'yyyy-MM-dd HH:mm'
    }, // Infered short + short gregorian/dateTimeFormats
    // ca-gregorian/main/dates/calendars/gregorian/days/format/short or abbreviated (2 digit)
    days: {
      wide: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
      abbreviated: ['di', 'lu', 'ma', 'me', 'je', 've', 'sa'],
      narrow: ['D', 'L', 'M', 'M', 'J', 'V', 'S']
    },
    // ca-gregorian/main/dates/calendars/gregorian/months/format/wide
    months: {
      wide: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
      abbreviated: ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.']
    },
    // ca-gregorian/main/dates/calendars/gregorian/timeFormats/short
    timeFormat: 'HH:mm',
    // ca-gregorian/main/dates/calendars/gregorian/dayPeriods/wide
    dayPeriods: ['AM', 'PM']
  }],
  // numbers/currencyFormats-numberSystem-latn/standard (Replace Sign http://www.currencysymbols.in ?)
  currencySign: '$', // (Replace Sign http://www.currencysymbols.in ?)
  currencyFormat: '#,##0.00 ¤',
  // numbers/symbols-numberSystem-latn
  numbers: {
    percentSign: '%',
    percentFormat: '#,##0 %',
    minusSign: '-',
    decimal: ',',
    group: ' '
  },
  // Resx - Approved By Translation Team
  messages: {
    AboutText: { id: 'AboutText', value: 'Copyright &copy; {0} Infor. Tous droits réservés. Les termes et marques de conception mentionnés ci-après sont des marques et/ou des marques déposées d\'Infor et/ou de ses partenaires et filiales. Tous droits réservés. Toutes les autres marques répertoriées ci-après sont la propriété de leurs propriétaires respectifs.' },
    Actions: { id: 'Actions', value: 'Actions', comment: 'Tooltip text for the action button with additional in context actions' },
    AdditionalItems: { id: 'AdditionalItems', value: 'Eléments supplémentaires', comment: 'Button tooltip used in a list of movable items' },
    Add: { id: 'Add', value: 'Ajouter', comment: 'Add' },
    AddNewTab: { id: 'AddNewTab', value: 'Ajouter un onglet', comment: 'Attached to a button that adds new tabs' },
    AdvancedFilter: { id: 'AdvancedFilter', value: 'Créer filtre avancé', comment: 'In a data grid active an advanced filtering feature' },
    Alert: { id: 'Alert', value: 'Alerte', comment: 'Alert' },
    AlertOnPage: { id: 'AlertOnPage', value: 'Message(s) d\'alerte sur page', comment: 'Alert message(s) on page n' },
    All: { id: 'All', value: 'Tout', comment: 'All items in the context of a filter' },
    AllResults: { id: 'AllResults', value: 'Tous les résultats pour', comment: 'Search Results Text' },
    AligntoBottom: { id: 'AligntoBottom', value: 'Aligner en bas', comment: 'Align to Bottom tooltip' },
    AlignCenterHorizontally: { id: 'AlignCenterHorizontally', value: 'Aligner horizontalement au centre', comment: 'Align Center Horizontally tooltip' },
    Amber: { id: 'Amber', value: 'Ambre', comment: 'Color in our color pallette' },
    Amethyst: { id: 'Amethyst', value: 'Améthyste', comment: 'Color in our color pallette' },
    Apply: { id: 'Apply', value: 'Appliquer', comment: 'Text in a button to apply an action' },
    Attach: { id: 'Attach', value: 'Joindre', comment: 'Attach' },
    Available: { id: 'Available', value: 'Disponible', comment: 'Button tooltip used in a list of movable items' },
    Azure: { id: 'Azure', value: 'Azure', comment: 'Color in our color pallette' },
    BackgroundColor: { id: 'BackgroundColor', value: 'Couleur d\'arrière-plan', comment: 'add or edit text background color in the editor' },
    Between: { id: 'Between', value: 'Entre', comment: 'Between in icons for filtering' },
    Blockquote: { id: 'Blockquote', value: 'Bloquer le devis', comment: 'insert a block quote in the editor' },
    Bold: { id: 'Bold', value: 'Gras', comment: 'Make text Bold' },
    Bookmarked: { id: 'Bookmarked', value: 'Signet ajouté', comment: 'Bookmark filled - Element is already bookmarked' },
    BookmarkThis: { id: 'BookmarkThis', value: 'Mettre un signet', comment: 'Bookmark an element' },
    Breadcrumb: { id: 'Breadcrumb', value: 'Fil d\'Ariane', comment: 'Text describing the Breadcrumb' },
    Browser: { id: 'Browser', value: 'Navigateur', comment: 'As in a Web Browser' },
    BulletedList: { id: 'BulletedList', value: 'Liste à puces', comment: 'Bulleted List tooltip' },
    Calendar: { id: 'Calendar', value: 'Calendrier', comment: 'Inline Text for the title of the Calendar control' },
    Camera: { id: 'Camera', value: 'Appareil photo', comment: 'Camera tooltip' },
    Cancel: { id: 'Cancel', value: 'Annuler', comment: 'Cancel tooltip' },
    CapsLockOn: { id: 'CapsLockOn', value: 'Verrouillage majuscule', comment: 'Caps Lock On message' },
    Cart: { id: 'Cart', value: 'Panier', comment: 'Cart tooltip' },
    CenterText: { id: 'CenterText', value: 'Centre', comment: 'An Icon Tooltip' },
    CharactersLeft: { id: 'CharactersLeft', value: 'Caractères restants : {0}', comment: 'indicator showing how many more characters you can type.' },
    CharactersMax: { id: 'CharactersMax', value: 'Nombre de caractères maximum de ', comment: 'indicator showing how many max characters you can type.' },
    ChangeSelection: { id: 'ChangeSelection', value: '. Pour modifier la sélection, utilisez les touches de direction.', comment: 'Audible Text for drop down list help' },
    Checkbox: { id: 'Checkbox', value: 'Case à cocher', comment: 'Checkbox tooltip' },
    Checked: { id: 'Checked', value: 'Coché', comment: 'Checked tooltip' },
    Clear: { id: 'Clear', value: 'Effacer', comment: 'Tooltip for a Clear Action' },
    ClearFilter: { id: 'ClearFilter', value: 'Effacer le filtre', comment: 'Clear the current filter criteria' },
    ClearSelection: { id: 'ClearSelection', value: '(Effacer la sélection)', comment: 'clear dropdown selection' },
    Clock: { id: 'Clock', value: 'Horloge', comment: 'Clock tooltip' },
    Close: { id: 'Close', value: 'Fermer', comment: 'Tooltip for a Close Button Action' },
    Clickable: { id: 'Clickable', value: 'Interactif dans l\'éditeur', comment: 'Clickable in editor' },
    Copy: { id: 'Copy', value: 'Copier', comment: 'Copy tooltip' },
    Collapse: { id: 'Collapse', value: 'Réduire', comment: 'Collapse / close a tree/submenu' },
    CollapseAppTray: { id: 'CollapseAppTray', value: 'Réduire menu app', comment: 'Collapse App Tray tooltip' },
    Columns: { id: 'Columns', value: 'Colonnes', comment: 'Columns tooltip' },
    Component: { id: 'Component', value: 'Composant', comment: 'As in a UI component - building block.' },
    Compose: { id: 'Compose', value: 'Composer', comment: 'Compose tooltip' },
    Completed: { id: 'Completed', value: 'Terminé', comment: 'Text For a Completed Status' },
    Confirm: { id: 'Confirm', value: 'Confirmer', comment: 'Confirm tooltip' },
    ConfirmOnPage: { id: 'ConfirmOnPage', value: 'Message(s) de confirmation sur page', comment: 'Confirm message(s) on page n' },
    CookiesEnabled: { id: 'CookiesEnabled', value: 'Cookies activés', comment: 'Returns if browser cookies are enabled or not.' },
    Contains: { id: 'Contains', value: 'Contient', comment: 'Contains in icons for filtering' },
    CssClass: { id: 'CssClass', value: 'Classe CSS', comment: 'Label for entering a Css Class name' },
    Cut: { id: 'Cut', value: 'Couper', comment: 'Cut tooltip' },
    Date: { id: 'Date', value: 'Date', comment: 'Describes filtering by a date data type' },
    DaysOverdue: { id: 'DaysOverdue', value: '{0} jours de retard', comment: 'For a task /date UI' },
    DaysRemaining: { id: 'DaysRemaining', value: '{0} jours restants', comment: 'For a task /date UI' },
    Delete: { id: 'Delete', value: 'Supprimer', comment: 'Delete Toolbar Action Tooltip' },
    DistributeHoriz: { id: 'DistributeHoriz', value: 'Répartir horizontalement', comment: 'Icon button tooltip for action that distributes elements across Horizontally' },
    Document: { id: 'Document', value: 'Document', comment: 'Document tooltip' },
    Dirty: { id: 'Dirty', value: 'Ligne modifiée', comment: 'Record is dirty / modified' },
    Drilldown: { id: 'Drilldown', value: 'Zoom avant', comment: 'Drill by moving page flow into a record' },
    Drillup: { id: 'Drillup', value: 'Zoom arrière', comment: 'Opposite of Drilldown, move back up to a larger set of records' },
    Dropdown: { id: 'Dropdown', value: 'Liste déroulante', comment: 'Dropdown' },
    DoesNotContain: { id: 'DoesNotContain', value: 'Ne contient pas', comment: 'Does Not Contain in icons for filtering' },
    DoesNotEndWith: { id: 'DoesNotEndWith', value: 'Ne finit pas par', comment: 'For condition filtering' },
    DoesNotEqual: { id: 'DoesNotEqual', value: 'N\'est pas égal', comment: 'Does Not Equal in icons for filtering' },
    DoesNotStartWith: { id: 'DoesNotStartWith', value: 'Ne commence pas par', comment: 'For condition filtering' },
    Down: { id: 'Down', value: 'Bas', comment: 'Down tooltip' },
    Download: { id: 'Download', value: 'Télécharger', comment: 'Download tooltip' },
    Duplicate: { id: 'Duplicate', value: 'Copier', comment: 'Duplicate tooltip' },
    EitherSelectedOrNotSelected: { id: 'EitherSelectedOrNotSelected', value: 'Sélectionné ou Non sélectionné', comment: 'Either Selected Or NotSelected in icons for filtering' },
    EndsWith: { id: 'EndsWith', value: 'Finit par', comment: 'for condition filtering' },
    EnterComments: { id: 'EnterComments', value: 'Saisissez un commentaire ici...', comment: 'Placeholder text for a text input (comments)' },
    Error: { id: 'Error', value: 'Erreur', comment: 'Title, Spoken Text describing fact an error has occured' },
    ErrorAllowedTypes: { id: 'ErrorAllowedTypes', value: 'Type de fichier non autorisé', comment: 'Error string for file-upload' },
    ErrorMaxFileSize: { id: 'ErrorMaxFileSize', value: 'Taille limite de fichier dépassée', comment: 'Error string for file-upload' },
    ErrorMaxFilesInProcess: { id: 'ErrorMaxFilesInProcess', value: 'Nombre maximum de fichiers dépassé', comment: 'Error string for file-upload' },
    ErrorOnPage: { id: 'ErrorOnPage', value: 'Message(s) d\'erreur sur page', comment: 'Error message(s) on page n' },
    EmailValidation: { id: 'EmailValidation', value: 'Adresse e-mail non valide', comment: 'This the rule for email validation' },
    Emerald: { id: 'Emerald', value: 'Emeraude', comment: 'Color in our color pallette' },
    Expand: { id: 'Expand', value: 'Développer', comment: 'Expand open a tree/submenu' },
    ExpandAppTray: { id: 'ExpandAppTray', value: 'Développer menu app', comment: 'ExpandAppTray tooltip' },
    ExpandCollapse: { id: 'ExpandCollapse', value: 'Développer / réduire', comment: 'Text to toggle a button in a container.' },
    ExportAsSpreadsheet: { id: 'ExportAsSpreadsheet', value: 'Exporter vers feuille de calcul', comment: 'Export as Spreadsheet tooltip' },
    Edit: { id: 'Edit', value: 'Modifier', comment: 'Edit tooltip' },
    Equals: { id: 'Equals', value: 'Est égal', comment: 'Equals in icons for filtering' },
    ExitFullView: { id: 'ExitFullView', value: 'Afficher', comment: 'Exit Full View tooltip' },
    Export: { id: 'Export', value: 'Exporter', comment: 'Export tooltip' },
    ExportToExcel: { id: 'ExportToExcel', value: 'Exporter vers Excel', comment: 'Export To Excel menu option in datagrid' },
    Favorite: { id: 'Favorite', value: 'Favori', comment: 'A favorite item' },
    FileUpload: { id: 'FileUpload', value: 'Chargement de fichier. Appuyez sur Entrée pour rechercher un fichier', comment: 'Screen Reader instructions' },
    Filter: { id: 'Filter', value: 'Filtrer', comment: 'Filter tooltip' },
    FirstPage: { id: 'FirstPage', value: 'Première page', comment: 'First Page tooltip' },
    Folder: { id: 'Folder', value: 'Dossier', comment: 'Folder tooltip' },
    FullView: { id: 'FullView', value: 'Plein affichage', comment: 'Full View tooltip' },
    GoForward: { id: 'GoForward', value: 'Avancer', comment: 'Move Page / object this direction' },
    GoBack: { id: 'GoBack', value: 'Précédent', comment: 'Move Page / object this directionp' },
    GoDown: { id: 'GoDown', value: 'Vers le bas', comment: 'Move Page / object this directionp' },
    GoUp: { id: 'GoUp', value: 'Vers le haut', comment: 'Move Page / object this direction' },
    Go: { id: 'Go', value: 'Go', comment: 'Go, perform a movement, start a search, move to the next "thing" in a workflow.' },
    Graphite: { id: 'Graphite', value: 'Graphite', comment: 'Color in our color pallette' },
    GreaterOrEquals: { id: 'GreaterOrEquals', value: 'Supérieur ou égal à', comment: 'Greater Than Or Equals in icons for filtering' },
    GreaterThan: { id: 'GreaterThan', value: 'Supérieur à', comment: 'Greater Than in icons for filtering' },
    Grid: { id: 'Grid', value: 'Grille', comment: 'Grid tooltip' },
    Hours: { id: 'Hours', value: 'Heures', comment: 'the hour portion of a time' },
    HeadingThree: { id: 'HeadingThree', value: 'En-tête trois', comment: 'Heading Three tooltip' },
    HeadingFour: { id: 'HeadingFour', value: 'En-tête quatre', comment: 'Heading Four tooltip' },
    Highest: { id: 'Highest', value: 'Valeur supérieure', comment: 'Highest Four tooltip' },
    Home: { id: 'Home', value: 'Accueil', comment: 'Home tooltip' },
    HtmlView: { id: 'HtmlView', value: 'Affichage HTML', comment: 'Html View tooltip' },
    Image: { id: 'Image', value: 'Image', comment: 'Image of something' },
    Import: { id: 'Import', value: 'Importer', comment: 'Import tooltip' },
    Info: { id: 'Info', value: 'Info', comment: 'Info tooltip' },
    InfoOnPage: { id: 'InfoOnPage', value: 'Message(s) d\'information sur page', comment: 'Information message(s) on page n' },
    InProgress: { id: 'In Progress', value: 'En cours', comment: 'Info tooltip that an action is in progress' },
    Insert: { id: 'Insert', value: 'Insérer', comment: 'Insert Modal Dialog Button' },
    InsertAnchor: { id: 'InsertAnchor', value: 'Insérer point d\'ancrage', comment: 'Insert Acnhor (link) in an editor' },
    InsertImage: { id: 'InsertImage', value: 'Insérer image', comment: 'Insert Image in an editor' },
    InsertLink: { id: 'InsertLink', value: 'Insérer lien', comment: 'Insert Link in an editor' },
    InsertUrl: { id: 'InsertUrl', value: 'Insérer URL', comment: 'Insert a Url in an editor' },
    Italic: { id: 'Italic', value: 'Italique', comment: 'Make Text Italic' },
    InvalidDate: { id: 'InvalidDate', value: 'Date non valide', comment: 'validation message for wrong date format (short)' },
    InvalidTime: { id: 'InvalidTime', value: 'Heure non valide', comment: 'validation message for wrong time format' },
    Inventory: { id: 'Inventory', value: 'Stocks', comment: 'Icon button tooltop for Inventory Action' },
    IsEmpty: { id: 'IsEmpty', value: 'Est vide', comment: 'Is Empty in icons for filtering' },
    IsNotEmpty: { id: 'IsNotEmpty', value: 'N\'est pas vide', comment: 'Is Not Empty in icons for filtering' },
    ItemsSelected: { id: 'ItemsSelected', value: 'Articles sélectionnés', comment: 'Num of Items selected for swaplist' },
    JustifyCenter: { id: 'JustifyCenter', value: 'Centre', comment: 'justify text to center in the editor' },
    JustifyLeft: { id: 'JustifyLeft', value: 'Alignement à gauche', comment: 'justify text to left in the editor' },
    JustifyRight: { id: 'JustifyRight', value: 'Alignement à droite', comment: 'justify text to right in the editor' },
    Keyword: { id: 'Keyword', value: 'Mot-clé', comment: 'Describes filtering by a keyword search' },
    Launch: { id: 'Launch', value: 'Lancer', comment: 'Launch' },
    LastPage: { id: 'LastPage', value: 'Dernière page', comment: 'Last Page tooltip' },
    Left: { id: 'Left', value: 'Gauche', comment: 'Left tooltip' },
    LessOrEquals: { id: 'LessOrEquals', value: 'Inférieur ou égal à', comment: 'Less Than Or Equals in icons for filtering' },
    LessThan: { id: 'LessThan', value: 'Inférieur à', comment: 'Less Than in icons for filtering' },
    Link: { id: 'Link', value: 'Lien', comment: 'Link - as in hyperlink - icon tooltop' },
    Load: { id: 'Load', value: 'Charger', comment: 'Load icon tooltip' },
    Loading: { id: 'Loading', value: 'Chargement', comment: 'Text below spinning indicator to indicate loading' },
    Locale: { id: 'Locale', value: 'Paramètre régional', comment: 'The users locale string for example en-US, it-It' },
    Locked: { id: 'Locked', value: 'Verrouillé', comment: 'Locked tooltip' },
    Logout: { id: 'Logout', value: 'Se déconnecter', comment: 'Log out of the application' },
    Lookup: { id: 'Lookup', value: 'Rechercher', comment: 'Lookup - As in looking up a record or value' },
    Lowest: { id: 'Lowest', value: 'Valeur inférieure', comment: 'Lowest - As in Lowest value' },
    Mail: { id: 'Mail', value: 'Courrier', comment: 'Mail tooltip' },
    MapPin: { id: 'MapPin', value: 'PIN', comment: 'Map Pin tooltip' },
    Maximize: { id: 'Maximize', value: 'Agrandir', comment: 'Maximize a screen or dialog in the UI' },
    Median: { id: 'Median', value: 'Valeur médiane', comment: 'Median in Mathematics' },
    Medium: { id: 'Medium', value: 'Moyen', comment: 'Describes a Medium sized Row Height in a grid/list' },
    Menu: { id: 'Menu', value: 'Menu', comment: 'Menu tooltip' },
    MingleShare: { id: 'MingleShare', value: 'Partager avec Ming.le', comment: 'Share the contextual object/action in the mingle system' },
    Minutes: { id: 'Minutes', value: 'Minutes', comment: 'the minutes portion of a time' },
    Minimize: { id: 'Minimize', value: 'Réduire', comment: 'Minimize tooltip' },
    Minus: { id: 'Minus', value: 'Moins', comment: 'Minus tooltip' },
    Mobile: { id: 'Mobile', value: 'Portable', comment: 'Indicates a mobile device (phone tablet ect)' },
    Month: { id: 'Month', value: 'Mois', comment: 'As in a date month' },
    More: { id: 'More', value: 'Plus...', comment: 'Text Indicating More Buttons or form content' },
    MoreActions: { id: 'MoreActions', value: 'Actions supplémentaires', comment: 'Text on the More Actions button indictating hidden functions' },
    MoveToLeft: { id: 'MoveToLeft', value: 'Déplacer vers la gauche', comment: 'Button tooltip used in a list of movable items' },
    MoveToRight: { id: 'MoveToRight', value: 'Déplacer vers la droite', comment: 'Button tooltip used in a list of movable items' },
    MsgDirty: { id: 'MsgDirty', value: ', Modifié', comment: 'for modified form fields' },
    NewDocument: { id: 'NewDocument', value: 'Nouveau document', comment: 'New Document tooltip' },
    NewItem: { id: 'NewItem', value: 'Nouvel élément', comment: 'New item in listbuilder' },
    Next: { id: 'Next', value: 'Suivant', comment: 'Next in icons tooltip' },
    NextPage: { id: 'NextPage', value: 'Page suivante', comment: 'Next on Pager' },
    NextMonth: { id: 'NextMonth', value: 'Mois suivant', comment: 'the label for the button that moves calendar to next/prev' },
    No: { id: 'No', value: 'Non', comment: 'On a dialog button' },
    NoData: { id: 'NoData', value: 'Aucune donnée disponible', comment: 'Shown when there is no rows shown in a list' },
    NoDataFilter: { id: 'NoDataFilter', value: 'Aucune donnée disponible, effectuez une nouvelle sélection de filtre pour obtenir des résultats.', comment: 'Shown when there is no rows shown in a list' },
    NoDataList: { id: 'NoDataList', value: 'Aucune donnée disponible, effectuez une sélection dans la liste ci-dessus pour obtenir des résultats.', comment: 'Shown when there is no rows shown in a list' },
    NoResults: { id: 'NoResults', value: 'Aucun résultat', comment: 'Search Results Text' },
    Normal: { id: 'Normal', value: 'Normal', comment: 'Normal row height' },
    Notes: { id: 'Notes', value: 'Remarques', comment: 'Notes icon tooltip' },
    NotSelected: { id: 'NotSelected', value: 'Pas sélectionné', comment: 'Not Selected in icons for filtering' },
    NumberList: { id: 'NumberList', value: 'Liste numérotée', comment: 'Number List tooltip' },
    Ok: { id: 'Ok', value: 'OK', comment: 'Ok button on a dialog' },
    OpenBackClose: { id: 'OpenBackClose', value: 'Ouvrir / Retour / Fermer', comment: 'Open / Back / Close tooltip' },
    OpenClose: { id: 'OpenClose', value: 'Ouvrir / Fermer', comment: 'Open / Close tooltip' },
    OrderedList: { id: 'OrderedList', value: 'Insérer/supprimer liste numérotée', comment: 'Insert an Ordered list in the editor' },
    Page: { id: 'Page', value: 'page ', comment: 'Text on the pager links' },
    PageOf: { id: 'PageOf', value: 'Page {0} sur {1}', comment: 'Pager Text Showing current and number of pages' },
    PageOn: { id: 'PageOn', value: 'Vous êtes actuellement à la page ', comment: 'Text on the pager links' },
    Paste: { id: 'Paste', value: 'Coller', comment: 'Paste icon tooltip' },
    PasswordValidation: { id: 'PasswordValidation', value: 'Votre <strong>mot de passe doit</strong><br>être de 10 caractères au moins<br>avoir au moins une lettre majuscule<br>avoir au moins une lettre minuscule<br>contenir un caractère spécial<br>ne pas contenir votre nom d\'utilisateur<br>être différent des mots de passe précédents<br>', comment: 'Password validation requirements' },
    PasswordConfirmValidation: { id: 'PasswordConfirmValidation', value: 'Les mots de passe doivent correspondre', comment: 'Password Confirm validation' },
    Peak: { id: 'Peak', value: 'Valeur maximale', comment: 'the max or peak value in a chart' },
    PersonalizeColumns: { id: 'PersonalizeColumns', value: 'Personnaliser les colonnes', comment: 'Customize Columns in a Grid' },
    Platform: { id: 'Platform', value: 'Plateforme', comment: 'The users operating system i.e. mac, windows' },
    Period: { id: 'Period', value: 'Période', comment: 'the am/pm portion of a time' },
    PressDown: { id: 'PressDown', value: 'Utilisez la flèche vers le bas pour sélectionner une date', comment: 'the audible label for Tooltip about how to operate the date picker' },
    PressShiftF10: { id: 'PressShiftF10', value: 'Appuyez sur Maj+F10 pour ouvrir le menu contextuel.', comment: 'the audible infor for screen readers on how to use a field with a popup menu' },
    Previous: { id: 'Previous', value: 'Précédent', comment: 'Previous icon tooltip - moved to previous record' },
    PreviousMonth: { id: 'PreviousMonth', value: 'Mois précédent', comment: 'the label for the button that moves calendar to next/prev' },
    PreviousPage: { id: 'PreviousPage', value: 'Page précédente', comment: 'Previous Page tooltip' },
    Print: { id: 'Print', value: 'Imprimer', comment: 'Print tooltip' },
    Range: { id: 'Range', value: 'Plage', comment: 'Range for tooltip' },
    RecordsPerPage: { id: 'RecordsPerPage', value: '{0} enregistrements par page', comment: 'Dropdown allows the user to select how many visible records {} shows select value.' },
    Redo: { id: 'Redo', value: 'Rétablir', comment: 'Redo tooltip' },
    ReorderRows: { id: 'ReorderRows', value: 'Retrier les lignes', comment: 'Drag and Reorder Grid Rows' },
    Refresh: { id: 'Refresh', value: 'Actualiser', comment: 'Refresh tooltip' },
    Required: { id: 'Required', value: 'Obligatoire', comment: 'indicates a form field is manditory' },
    Reset: { id: 'Reset', value: 'Réinitialiser', comment: 'Reset tooltip' },
    ResetDefault: { id: 'ResetDefault', value: 'Réinitialiser à valeur par défaut', comment: 'Reset Datagrid Columns, Filter and other Layout' },
    Result: { id: 'Result', value: 'Résultat', comment: 'Showing a single result in a List' },
    Results: { id: 'Results', value: 'Résultats', comment: 'As in showing N Results (plural) in a List' },
    RightAlign: { id: 'RightAlign', value: 'Alignement à droite', comment: 'Right Align tooltip' },
    RightAlignText: { id: 'RightAlignText', value: 'Alignement à droite', comment: 'Right Align Text tooltip' },
    Right: { id: 'Right', value: 'Droite', comment: 'Right' },
    Roles: { id: 'Roles', value: 'Rôles', comment: 'Roles tooltip' },
    RowHeight: { id: 'RowHeight', value: 'Hauteur de ligne', comment: 'Describes the Height for Rows in a Data Grid' },
    Ruby: { id: 'Ruby', value: 'Rubis', comment: 'Color in our color pallette' },
    RunFilter: { id: 'RunFilter', value: 'Exécuter le filtre', comment: 'Execute the current filter criteria' },
    Save: { id: 'Save', value: 'Enregistrer', comment: 'Save tooltip' },
    SaveCurrentView: { id: 'SaveCurrentView', value: 'Enregistrer l\'affichage actuel', comment: 'Datagrids contain view sets. This menu option saves them' },
    SavedViews: { id: 'SavedViews', value: 'Vues enregistrées', comment: 'Label for a list of Views' },
    Seconds: { id: 'Seconds', value: 'Secondes', comment: 'the seconds portion of a time' },
    Search: { id: 'Search', value: 'Rechercher', comment: 'Search tooltip' },
    SearchColumnName: { id: 'SearchColumnName', value: 'Recherchez un nom de colonne', comment: 'Search for a datagrid column by name' },
    SearchFolder: { id: 'SearchFolder', value: 'Rechercher dans le dossier', comment: 'Search Folder tooltip' },
    SearchList: { id: 'SearchList', value: 'Rechercher dans la liste', comment: 'Search List tooltip' },
    Select: { id: 'Select', value: 'Sélectionner', comment: 'text describing a select action' },
    Selected: { id: 'Selected', value: 'Sélectionné', comment: 'text describing a selected object' },
    SelectAll: { id: 'SelectAll', value: 'Sélectionner tout', comment: 'describes the action of selecting all items available in a list' },
    Send: { id: 'Send', value: 'Envoyer', comment: 'Send tooltip' },
    SetTime: { id: 'SetTime', value: 'Régler l\'heure', comment: 'button text that inserts time when clicked' },
    Settings: { id: 'Settings', value: 'Paramètres', comment: 'Settings tooltip' },
    Short: { id: 'Short', value: 'Court', comment: 'Describes a Shorted Row Height in a grid/list' },
    ShowFilterRow: { id: 'ShowFilterRow', value: 'Afficher la ligne de filtre', comment: 'Toggle a row with filer info above a list' },
    ShowLess: { id: 'ShowLess', value: 'Afficher moins', comment: 'Show less form content' },
    ShowMore: { id: 'ShowMore', value: 'Afficher plus', comment: 'Show more form content' },
    Slate: { id: 'Slate', value: 'Ardoise', comment: 'Color in our color pallette' },
    SlideOf: { id: 'SlideOf', value: 'Diapositive {0} sur {1}', comment: 'Slide Text Showing current and total number of slides' },
    SlidesOf: { id: 'SlidesOf', value: 'Diapositives {0} et {1} sur {2}', comment: 'Slides Text Showing current slides and total number of slides' },
    SliderHandle: { id: 'SliderHandle', value: 'Pointeur pour', comment: 'Description of the portion of a Slider control that is focusable and changes its value, followed in code by the name of the control' },
    SliderMaximumHandle: { id: 'SliderMaximumHandle', value: 'Plage maximale du pointeur pour', comment: 'Describes a maximum value handle in a Range (double slider), followed in code by the name of the control' },
    SliderMinimumHandle: { id: 'SliderMinimumHandle', value: 'Plage minimale du pointeur pour', comment: 'Describes a minimum value handle in a Range (double slider), followed in code by the name of the control' },
    SkipToMain: { id: 'SkipToMain', value: 'Sauter à la zone de contenu principal', comment: 'Skip link in header, jumps when clicked on to main area' },
    StartsWith: { id: 'StartsWith', value: 'Commence par', comment: 'for condition filtering' },
    StepsCompleted: { id: 'StepsCompleted', value: '{0} sur {1} étapes terminées', comment: 'steps of a wizard/chart' },
    StrikeThrough: { id: 'StrikeThrough', value: 'Barre médiane', comment: 'turn on and off strike through text in text editor (like word)' },
    SortAtoZ: { id: 'SortAtoZ', value: 'Tri ascendant', comment: 'Sort A to Z in icons for filtering' },
    SortZtoA: { id: 'SortZtoA', value: 'Tri descendant', comment: 'Sort Z to A in icons for filtering' },
    SortDown: { id: 'SortDown', value: 'Tri décroissant', comment: 'Sort Down tooltip' },
    SortUp: { id: 'SortUp', value: 'Tri croissant', comment: 'Sort Up tooltip' },
    Subscript: { id: 'Subscript', value: 'Indice', comment: 'Turn on and off Subscript text in text editor (like word)' },
    Superscript: { id: 'Superscript', value: 'Exposant', comment: 'Turn on and off Superscript text in text editor (like word)' },
    Tabs: { id: 'Tabs', value: 'Onglets...', comment: 'Used in the Tabs Control\'s more menu, preceeded by a number that describes how many tabs are in the spillover menu' },
    Tack: { id: 'Tack', value: 'PIN', comment: 'Pin an object' },
    Tall: { id: 'Tall', value: 'en hauteur', comment: 'Describes a Taller Row Height in a grid/list' },
    Target: { id: 'Target', value: 'Cible', comment: 'Label for an input to enter a Target (Url Attribute)' },
    TestLocaleDefaults: { id: 'TestLocaleDefaults', value: 'Tester les valeurs par défaut de paramètre régional', comment: 'Do not translate' },
    TextColor: { id: 'TextColor', value: 'Couleur du texte', comment: 'add or edit text color in the editor' },
    TextDropArea: { id: 'DropArea', value: 'Glisser déplacer les fichiers à charger', comment: 'text for drop area for advanced fileupload' },
    TextDropAreaWithBrowse: { id: 'TextDropAreaWithBrowse', value: 'Glisser déplacer ou <span class="hyperlink »>sélectionner les fichiers</span> à charger', comment: 'text for drop area with browse for advanced fileupload' },
    TextBtnCancel: { id: 'TextBtnCancel', value: 'Annuler le chargement de ce fichier', comment: 'text for cancel button for advanced fileupload' },
    TextBtnCloseError: { id: 'TextBtnCloseError', value: 'Fermer cette erreur', comment: 'text for error close button for advanced fileupload' },
    TextBtnRemove: { id: 'TextBtnRemove', value: 'Fermer cette erreur', comment: 'text for remove button for advanced fileupload' },
    Timer: { id: 'Timer', value: 'Minuteur', comment: 'Timer tooltip' },
    Today: { id: 'Today', value: 'Aujourd\'hui', comment: 'refering to today on a calendar' },
    ToggleBold: { id: 'ToggleBold', value: 'Basculer avec l\'option de texte en gras', comment: 'turn on and off bold in text editor (like word)' },
    ToggleH3: { id: 'ToggleH3', value: 'Basculer avec en-tête 3', comment: 'turn on and off heading 3 text' },
    ToggleH4: { id: 'ToggleH4', value: 'Basculer avec en-tête 4', comment: 'turn on and off heading 4 text' },
    ToggleItalic: { id: 'ToggleItalic', value: 'Basculer avec l\'option de texte en italique', comment: 'turn on and off Italic in text editor (like word)' },
    ToggleUnderline: { id: 'ToggleUnderline', value: 'Basculer avec l\'option de texte souligné', comment: 'turn on and off Underline in text editor (like word)' },
    Toolbar: { id: 'Toolbar', value: 'Barre d\'outils', comment: 'describing the toolbar component' },
    TopAlign: { id: 'TopAlign', value: 'Alignement en haut', comment: 'Top Align tooltip' },
    Total: { id: 'Total', value: 'Total', comment: 'Mathematic total of a calculation' },
    Totals: { id: 'Totals', value: 'Totaux', comment: 'Mathematic total of a calculation (plural)' },
    TreeCollapse: { id: 'TreeCollapse', value: 'Réduire arborescence', comment: 'Tree Collapse tooltip' },
    TreeExpand: { id: 'TreeExpand', value: 'Développer arborescence', comment: 'Tree Expand tooltip' },
    Turquoise: { id: 'Turquoise', value: 'Turquoise', comment: 'Color in our color pallette' },
    Up: { id: 'Up', value: 'Haut', comment: 'Up tooltip' },
    Upload: { id: 'Upload', value: 'Charger', comment: 'Upload tooltip' },
    UnavailableDate: { id: 'UnavailableDate', value: 'Date non disponible', comment: 'Unavailable Date Text' },
    Underline: { id: 'Underline', value: 'Souligner', comment: 'Make text Underlined' },
    Undo: { id: 'Undo', value: 'Annuler', comment: 'Undo tooltip' },
    Unlocked: { id: 'Unlocked', value: 'Déverrouillé', comment: 'Unlocked tooltip' },
    UnorderedList: { id: 'UnorderedList', value: 'Insérer/supprimer liste à puces', comment: 'Insert an Unordered list in the editor' },
    Unsupported: { id: 'Unsupported', value: 'Ce contenu n\'est pas disponible, il utilise des fonctionnalités qui ne sont pas prises en charge par la version du navigateur actuel.', comment: 'Suggesting browser upgrade for missing features.' },
    Url: { id: 'Url', value: 'URL', comment: 'Url tooltip' },
    UseArrow: { id: 'UseArrow', value: '. Utilisez les touches de direction pour sélectionner.', comment: 'Instructional comments for screen readers' },
    UseEnter: { id: 'UseEnter', value: '. Utilisez les flèches vers le haut ou vers le bas pour rechercher.', comment: 'Instructional comments for screen readers' },
    User: { id: 'User', value: 'Utilisateur', comment: 'User tooltip' },
    UserProfile: { id: 'UserProfile', value: 'Profile utilisateur', comment: 'User Profile tooltip' },
    VerticalMiddleAlign: { id: 'VerticalMiddleAlign', value: 'Alignement centré vertical', comment: 'Vertical Align tooltip' },
    ViewSource: { id: 'ViewSource', value: 'Afficher la vue source', comment: 'Toggle the source view in the editor' },
    ViewVisual: { id: 'ViewVisual', value: 'Afficher la vue objet', comment: 'Toggle the visual view in the editor' },
    Year: { id: 'Year', value: 'Année', comment: 'As in a date year' },
    Yes: { id: 'Yes', value: 'Oui', comment: 'On a dialog button' }
  }
});
