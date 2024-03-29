'use strict';

const transformResponse = require('./utils').transformResponse;

function InvalidParamsError(message) {
  this.name = 'INVALID_PARMAS';
  this.message = message || '参数不合法';
}

module.exports = Baas => {
  Baas.File = function(tableName, file) {
    if (!tableName) throw new InvalidParamsError('tableName 不能为空');
    if (!file instanceof Blob) throw new InvalidParamsError('参数必须是一个 Blob 文件');
    this.tableName = tableName;
    this.file = file;
    this.name = file.name;
  };
  Baas.File.prototype.metaData = (key) => {
    if (key) return this.file[key];
    return this.file;
  };
  Baas.File.prototype.save = ({ onProgress }) => {
    const fd = new FormData();
    fd.append('file', this.file);
    return Baas.api.post(`/tables/${this.tableName}/file?appId=${Baas.appId}`, {
      data: fd,
      onUploadProgress: onProgress || function() {}
    }).then(({ data }) => transformResponse(this.tableName, data));
  };
};

