'use babel';

import LanguageActrView from './language-actr-view';
import { CompositeDisposable } from 'atom';

export default {

  languageActrView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.languageActrView = new LanguageActrView(state.languageActrViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.languageActrView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'language-actr:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.languageActrView.destroy();
  },

  serialize() {
    return {
      languageActrViewState: this.languageActrView.serialize()
    };
  },

  toggle() {
    console.log('LanguageActr was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
