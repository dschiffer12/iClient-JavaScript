/* Copyright© 2000 - 2023 SuperMap Software Co.Ltd. All rights reserved.
 * This program are made available under the terms of the Apache License, Version 2.0
 * which accompanies this distribution and is available at http://www.apache.org/licenses/LICENSE-2.0.html.*/
import {ServiceBase} from './ServiceBase';
import {DatasourceService as CommonDatasourceService} from '@supermap/iclient-common/iServer/DatasourceService';
import { SetDatasourceParameters } from '@supermap/iclient-common/iServer/SetDatasourceParameters';

/**
 * @class DatasourceService
 * @category  iServer Data Datasource
 * @classdesc 数据源服务类。
 * @modulecategory Services
 * @param {string} url - 服务地址。
 * @param {Object} options - 参数。
 * @param {string} [options.proxy] - 服务代理地址。
 * @param {boolean} [options.withCredentials=false] - 请求是否携带 cookie。
 * @param {boolean} [options.crossOrigin] - 是否允许跨域请求。
 * @param {Object} [options.headers] - 请求头。
 * @extends {ServiceBase}
 * @usage
 */
export class DatasourceService extends ServiceBase {

    constructor(url, options) {
        super(url, options);
        this._datasourceService = new CommonDatasourceService(this.url, {
          proxy: this.proxy,
          withCredentials: this.withCredentials,
          crossOrigin: this.crossOrigin,
          headers: this.headers
        });
    }

    /**
     * @function DatasourceService.prototype.getDatasources
     * @description 数据源集查询服务。
     * @param {RequestCallback} callback - 回调函数。
     */
    getDatasources(callback) {
      this._datasourceService.getDatasourcesService(callback);
    }

    /**
     * @function DatasourceService.prototype.getDatasource
     * @description 数据源信息查询服务。
     * @param {string} datasourceName - 数据源名称。
     * @param {RequestCallback} callback 回调函数。
     */
    getDatasource(datasourceName, callback) {
      if (!datasourceName) {
          return;
      }
      this._datasourceService.getDatasourceService(datasourceName, callback);
    }

   /**
     * @function DatasourceService.prototype.setDatasource
     * @description 数据源信息设置服务。可实现更改当前数据源信息。
     * @param {SetDatasourceParameters} params - 数据源信息设置参数类。
     * @param {RequestCallback} callback - 回调函数。
     */
    setDatasource(params, callback) {
        if (!(params instanceof SetDatasourceParameters)) {
            return;
        }
        const datasourceParams = {
          description: params.description,
          coordUnit: params.coordUnit,
          distanceUnit: params.distanceUnit,
          datasourceName: params.datasourceName
        };
        this._datasourceService.setDatasourceService(datasourceParams, callback);
    }
}
