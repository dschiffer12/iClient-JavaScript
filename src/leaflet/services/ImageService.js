/* Copyright© 2000 - 2023 SuperMap Software Co.Ltd. All rights reserved.
 * This program are made available under the terms of the Apache License, Version 2.0
 * which accompanies this distribution and is available at http://www.apache.org/licenses/LICENSE-2.0.html.*/
import { ServiceBase } from './ServiceBase';
import '../core/Base';
import CommonMatchImageService from '@supermap/iclient-common/iServer/ImageService';

/**
 * @class ImageService
 * @deprecatedclassinstance L.supermap.imageService
 * @version 10.2.0
 * @constructs ImageService
 * @classdesc 影像服务类。
 * @category  iServer Image
 * @modulecategory Services
 * @extends {ServiceBase}
 * @example
 *      new ImageService(url,options)
 *      .getCollections(function(result){
 *          //doSomething
 *      })
 * @param {string} url - 服务地址。
 * @param {Object} options - 参数。
 * @param {string} [options.proxy] - 服务代理地址。
 * @param {boolean} [options.withCredentials=false] - 请求是否携带 cookie。
 * @param {boolean} [options.crossOrigin] - 是否允许跨域请求。
 * @param {Object} [options.headers] - 请求头。
 * @usage
 */
export var ImageService = ServiceBase.extend({
    initialize: function (url, options) {
        ServiceBase.prototype.initialize.call(this, url, options);
        this._imageService = new CommonMatchImageService(this.url, {
          proxy: this.options.proxy,
          withCredentials: this.options.withCredentials,
          crossOrigin: this.options.crossOrigin,
          headers: this.options.headers
        });
    },

    /**
     * @function ImageService.prototype.getCollections
     * @description 返回影像集合列表（Collections）。
     * @param {RequestCallback} callback - 回调函数。
     */
    getCollections: function (callback) {
      this._imageService.getCollections(callback);
    },

    /**
     * @function ImageService.prototype.getCollectionByID
     * @description ID值等于`collectionId`参数值的影像集合（Collection）。ID值用于在服务中唯一标识该影像集合。
     * @param {string} collectionId 影像集合（ Collection ）的 ID ，在一个影像服务中唯一标识影像集合。
     * @param {RequestCallback} callback - 回调函数。
     */
    getCollectionByID: function (collectionId, callback) {
      this._imageService.getCollectionByID(collectionId, callback);
    },
    /**
     * @function ImageService.prototype.search
     * @description 查询与过滤条件匹配的影像数据。
     * @param {ImageSearchParameter} [itemSearch] 查询参数。
     * @param {RequestCallback} callback - 回调函数。
     */
    search: function (itemSearch, callback) {
      this._imageService.search(itemSearch, callback);
    }
});

export var imageService = function (url, options) {
    return new ImageService(url, options);
};

