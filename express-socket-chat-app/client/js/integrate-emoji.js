window.emojiPicker = new EmojiPicker({
  emojiable_selector: '[data-emojiable=true]',
  assetsPath: './client/img/',
  popupButtonClasses: 'fa fa-smile-o'
});
window.emojiPicker.discover();
