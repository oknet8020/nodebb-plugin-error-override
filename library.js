'use strict';

const plugin = {};

plugin.filterErrorGet = async function (hookData) {
  if (hookData.error && hookData.error.code === '403') {
    hookData.templateData.error = null;
    hookData.templateData.message = 'אין לך הרשאה לצפות בעמוד זה. אם אתה חושב שזו טעות, <a href="https://forum.2business.co.il/topic/23/טופס-בקשת-הרשאה">לחץ כאן לבקשת גישה</a>.';
    hookData.templateData.title = 'הגישה נדחתה';
  }
  return hookData;
};

module.exports = plugin;
