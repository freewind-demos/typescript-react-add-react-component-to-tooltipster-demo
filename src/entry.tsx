import React from 'react'
import {render} from 'react-dom'
import 'tooltipster';
import 'tooltipster/dist/js/tooltipster.bundle';
import 'tooltipster/dist/css/tooltipster.bundle.min.css';
import {Hello} from './Hello';

const $ = require('jQuery');
import ITooltipsterInstance = JQueryTooltipster.ITooltipsterInstance;

$('#main').tooltipster({
  content: '<div style="height: 200px">Loading...</div>',
  contentAsHTML: true,
  delay: 100,
  interactive: true,
  side: ['bottom'],
  updateAnimation: 'fade',
  trigger: 'custom',
  triggerOpen: {
    mouseenter: true,
  },
  triggerClose: {
    click: true,
  },
  functionReady(instance: ITooltipsterInstance) {
    console.log("### instance", {
      elementTooltip: instance.elementTooltip(),
      elementOrigin: instance.elementOrigin(),
      content: instance.content(),
    })
    const panel = instance.elementTooltip()?.firstElementChild;
    if (panel) {
      render(<Hello/>, panel);
    }
  },
})
