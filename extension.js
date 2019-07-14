const Util = imports.misc.util;
const St = imports.gi.St;
const Main = imports.ui.main;
const PanelMenu = imports.ui.panelMenu;
const PopupMenu = imports.ui.popupMenu;
const Tweener = imports.ui.tweener;

let button;

function _change() {

    Util.spawn(['/usr/bin/theme-switcher-manual.sh']);
    
}

function init() {
    button = new St.Bin({ style_class: 'panel-button',
                          reactive: true,
                          can_focus: true,
                          x_fill: true,
                          y_fill: false,
                          track_hover: true });
    let icon = new St.Icon({ icon_name: 'preferences-desktop-screensaver-symbolic',
                             style_class: 'system-status-icon' });

                             
    button.set_child(icon);
    button.connect('button-press-event', _change);
}

function enable() {
    Main.panel._rightBox.insert_child_at_index(button, 1);
}

function disable() {
    Main.panel._rightBox.remove_child(button);
}
