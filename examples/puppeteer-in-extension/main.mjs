/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import {Puppeteer} from 'puppeteer-core/lib/esm/puppeteer/common/Puppeteer.js';

const puppeteer = new Puppeteer({
  isPuppeteerCore: true,
});

class Transport {
  constructor(tabId) {
    this.tabId = tabId;
  }
  send(message) {
    const parsed = JSON.parse(message);
    chrome.debugger
      .sendCommand(
        {tabId: this.tabId, sessionId: parsed.sessionId},
        parsed.method,
        parsed.params
      )
      .then(response => {
        this.onmessage(
          JSON.stringify({
            id: parsed.id,
            sessionId: parsed.sessionId,
            method: parsed.method,
            result: response,
          })
        );
      });
  }
  close() {
    console.log('close');
  }
}

async function connect(tabId) {
  await chrome.debugger.attach({tabId}, '1.3');
  const transport = new Transport(tabId);

  chrome.debugger.onEvent.addListener((debugee, method, params) => {
    if (debugee.tabId !== tabId) {
      return;
    }
    transport.onmessage(
      JSON.stringify({
        sessionId: debugee.sessionId,
        method: method,
        params: params,
      })
    );
  });

  return puppeteer.connect({
    transport,
  });
}

export {puppeteer, connect};
