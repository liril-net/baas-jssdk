# Baas.Query

Baas 查询的构造函数，同时负责生成查询条件（query-builder）和执行查询

## Constructor

**参数**

| 名字 | 类型 | 详细 |
| ---- | ---- | ------ |
| className | string | 数据表名 |

```js
const query = new Baas.Query('todo');
```

**返回**

`Type: Object`

## find

根据 `query` 筛选数据列表。

**参数**

| 名字 | 类型 | 详细 |
| ---- | ---- | ------ |
| query | object | 查询条件 |

```js
const query = new Baas.Query('todo');
query.find({
  $limit: 10,
  $skip: 0,
  $select: 'done'
}).then(() => alert('数据查询成功'));
```

**返回**

`Type: Array`

## get

根据 `id` 获取单条数据。

**参数**

| 名字 | 类型 | 详细 |
| ---- | ---- | ------ |
| id | string | 记录 id |

```js
const query = new Baas.Query('todo');
query.get('59001b05a92424303cb240a9').then(() => {
  alert('数据获取成功');
});
```

**返回**

`Type: Object`

## count

获取 Table 下所有记录数量

```js
const query = new Baas.Query('todo');
query.count().then(() => {
  alert('记录数量获取成功');
});
```

**返回**

`Type: Number`


