/* Copyright© 2000 - 2023 SuperMap Software Co.Ltd. All rights reserved.
 * This program are made available under the terms of the Apache License, Version 2.0
 * which accompanies this distribution and is available at http://www.apache.org/licenses/LICENSE-2.0.html.*/
 import { ServiceBase } from './ServiceBase';
 import '../core/Base';
 import { NetworkAnalyst3DService as CommonNetworkAnalyst3DService } from '@supermap/iclient-common/iServer/NetworkAnalyst3DService';
/**
 * @class NetworkAnalyst3DService
 * @deprecatedclassinstance L.supermap.networkAnalyst3DService
 * @classdesc 3D 网络分析服务类。
 * @category  iServer FacilityAnalyst3D
 * @modulecategory Services
 * @extends {ServiceBase}
 * @example
 * new NetworkAnalyst3DService(url)
 *  .sinksFacilityAnalyst(params,function(result){
 *     //doSomething
 * })
 * @param {string} url - 服务地址。请求网络分析服务，URL应为:
 *                      "http://localhost:8090/iserver/services/components-rest/rest/networkanalyst/RoadNet@Changchun"。
 * @param {Object} options - 参数。
 * @param {string} [options.proxy] - 服务代理地址。
 * @param {boolean} [options.withCredentials=false] - 请求是否携带 cookie。
 * @param {boolean} [options.crossOrigin] - 是否允许跨域请求。
 * @param {Object} [options.headers] - 请求头。
 * @usage
 */
export var NetworkAnalyst3DService = ServiceBase.extend({

    initialize: function (url, options) {
        ServiceBase.prototype.initialize.call(this, url, options);
        this._networkAnalyst3DService = new CommonNetworkAnalyst3DService(url, options);
    },

    /**
     * @function NetworkAnalyst3DService.prototype.sinksFacilityAnalyst
     * @description 汇查找服务。
     * @param {FacilityAnalystSinks3DParameters} params - 最近设施分析参数类（汇查找资源）。
     * @param {RequestCallback} callback - 回调函数。
     */
    sinksFacilityAnalyst: function (params, callback) {
      this._networkAnalyst3DService.sinksFacilityAnalyst(params, callback);
    },

    /**
     * @function NetworkAnalyst3DService.prototype.sourcesFacilityAnalyst
     * @description 源查找服务。
     * @param {FacilityAnalystSources3DParameters} params - 最近设施分析参数类（源查找资源）。
     * @param {RequestCallback} callback - 回调函数。
     * @returns {NetworkAnalyst3DService} NetworkAnalyst3DService的实例对象。
     */
    sourcesFacilityAnalyst: function (params, callback) {
      this._networkAnalyst3DService.sourcesFacilityAnalyst(params, callback);
    },

    /**
     * @function NetworkAnalyst3DService.prototype.traceUpFacilityAnalyst
     * @description 上游追踪资源服务。
     * @param {FacilityAnalystTraceup3DParameters} params - 上游追踪资源参数类。
     * @param {RequestCallback} callback - 回调函数。
     * @returns {NetworkAnalyst3DService} NetworkAnalyst3DService的实例对象。
     */
    traceUpFacilityAnalyst: function (params, callback) {
      this._networkAnalyst3DService.traceUpFacilityAnalyst(params, callback);
    },

    /**
     * @function NetworkAnalyst3DService.prototype.traceDownFacilityAnalyst
     * @description 下游追踪资源服务。
     * @param {FacilityAnalystTracedown3DParameters} params - 下游追踪资源参数类。
     * @param {RequestCallback} callback - 回调函数。
     */
    traceDownFacilityAnalyst: function (params, callback) {
      this._networkAnalyst3DService.traceDownFacilityAnalyst(params, callback);
    },

    /**
     * @function NetworkAnalyst3DService.prototype.upstreamFacilityAnalyst
     * @description 上游关键设施查找服务。
     * @param {FacilityAnalystUpstream3DParameters} params - 上游关键设施查找资源参数类。
     * @param {RequestCallback} callback - 回调函数。
     */
    upstreamFacilityAnalyst: function (params, callback) {
      this._networkAnalyst3DService.upstreamFacilityAnalyst(params, callback);
    }
});

export var networkAnalyst3DService = function (url, options) {
    return new NetworkAnalyst3DService(url, options);
};
