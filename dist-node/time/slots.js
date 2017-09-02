"use strict";

/*
 * Copyright © 2017 Lisk Foundation
 *
 * See the LICENSE file at the top-level directory of this distribution
 * for licensing information.
 *
 * Unless otherwise agreed in a custom licensing agreement with the Lisk Foundation,
 * no part of this software, including this file, may be copied, modified,
 * propagated, or distributed except according to the terms contained in the
 * LICENSE file.
 *
 * Removal or modification of this copyright notice is prohibited.
 *
 */
/**
 * Slots module provides functions for calculating time and slots against the Lisk blockchain epoch.
 * @class slots
 *
 * @method beginEpochTime
 * @return Date UTC 04/24/2016 5:00 pm
 */

function beginEpochTime() {
  return new Date(Date.UTC(2016, 4, 24, 17, 0, 0, 0));
}

/**
 * @method getEpochTime
 * @param time
 * @return {number} (time - beginEpochTime) in seconds
 */

function getEpochTime(givenTime) {
  var time = givenTime || new Date().getTime();
  var d = beginEpochTime();
  var t = d.getTime();
  return Math.floor((time - t) / 1000);
}

/**
 * `interval` is stored as a number in seconds. Value is 10.
 * @property interval
 * @static
 * @final
 * @type Number
 */

/**
 * `delegates` is stored as a number in amount of delegates. Value is 11.
 * @property delegates
 * @static
 * @final
 * @type Number
 */

var interval = 10;
var delegates = 11;

/**
 * @method getTime
 * @param time
 * @return {number}
 */

function getTime(time) {
  return getEpochTime(time);
}

/**
* @method getTimeWithOffset
* @param offset
* @return {number}
*/

function getTimeWithOffset(offset) {
  var now = new Date().getTime();
  var time = offset ? now + offset * 1000 : now;
  return getTime(time);
}

/**
 * @method getRealTime
 * @param epochTime
 * @return {number}
 */

function getRealTime(givenTime) {
  var epochTime = givenTime || getTime();
  var d = beginEpochTime();
  var t = Math.floor(d.getTime() / 1000) * 1000;
  return t + epochTime * 1000;
}

/**
 * @method getSlotNumber
 * @param epochTime
 * @return {number}
 */

function getSlotNumber(givenTime) {
  var epochTime = givenTime || getTime();
  return Math.floor(epochTime / interval);
}

/**
 * @method getSlotTime
 * @param slot
 * @return {number}
 */

function getSlotTime(slot) {
  return slot * interval;
}

/**
 * @method getNextSlot
 * @return {number}
 */

function getNextSlot() {
  var slot = getSlotNumber();

  return slot + 1;
}

/**
 * @method getLastSlot
 * @return {number}
 */

function getLastSlot(nextSlot) {
  return nextSlot + delegates;
}

module.exports = {
  interval: interval,
  delegates: delegates,
  getTime: getTime,
  getTimeWithOffset: getTimeWithOffset,
  getRealTime: getRealTime,
  getSlotNumber: getSlotNumber,
  getSlotTime: getSlotTime,
  getNextSlot: getNextSlot,
  getLastSlot: getLastSlot
};