/*
 * Strava API v3
 * The [Swagger Playground](https://developers.strava.com/playground) is the easiest way to familiarize yourself with the Strava API by submitting HTTP requests and observing the responses before you write any client code. It will show what a response will look like with different endpoints depending on the authorization scope you receive from your athletes. To use the Playground, go to https://www.strava.com/settings/api and change your “Authorization Callback Domain” to developers.strava.com. Please note, we only support Swagger 2.0. There is a known issue where you can only select one scope at a time. For more information, please check the section “client code” at https://developers.strava.com/docs.
 *
 * OpenAPI spec version: 3.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.43
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.StravaApiV3) {
      root.StravaApiV3 = {};
    }
    root.StravaApiV3.SummaryPRSegmentEffort = factory(root.StravaApiV3.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SummaryPRSegmentEffort model module.
   * @module model/SummaryPRSegmentEffort
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>SummaryPRSegmentEffort</code>.
   * @alias module:model/SummaryPRSegmentEffort
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>SummaryPRSegmentEffort</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SummaryPRSegmentEffort} obj Optional instance to populate.
   * @return {module:model/SummaryPRSegmentEffort} The populated <code>SummaryPRSegmentEffort</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('pr_activity_id'))
        obj.prActivityId = ApiClient.convertToType(data['pr_activity_id'], 'Number');
      if (data.hasOwnProperty('pr_elapsed_time'))
        obj.prElapsedTime = ApiClient.convertToType(data['pr_elapsed_time'], 'Number');
      if (data.hasOwnProperty('pr_date'))
        obj.prDate = ApiClient.convertToType(data['pr_date'], 'Date');
      if (data.hasOwnProperty('effort_count'))
        obj.effortCount = ApiClient.convertToType(data['effort_count'], 'Number');
    }
    return obj;
  }

  /**
   * The unique identifier of the activity related to the PR effort.
   * @member {Number} prActivityId
   */
  exports.prototype.prActivityId = undefined;

  /**
   * The elapsed time ot the PR effort.
   * @member {Number} prElapsedTime
   */
  exports.prototype.prElapsedTime = undefined;

  /**
   * The time at which the PR effort was started.
   * @member {Date} prDate
   */
  exports.prototype.prDate = undefined;

  /**
   * Number of efforts by the authenticated athlete on this segment.
   * @member {Number} effortCount
   */
  exports.prototype.effortCount = undefined;


  return exports;

}));
