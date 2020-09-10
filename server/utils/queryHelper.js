const squel = require('squel').useFlavour('mysql');;
class QueryHelper {
    constructor(table) {
        this.table = table;
        this.query = {};
    }

    select(alias, noLock) {
        this.query = squel
            .select({
                autoQuoteFieldNames: false,
                autoQuoteAliasNames: false,
                autoQuoteTableNames: false,
                nameQuoteCharacter: '"',
                // tableAliasQuoteCharacter: '"'
            });
        if (alias)
            this.query.from(this.table, alias, noLock);
        else
            this.query.from(this.table, null, noLock);

        return this;
    }

    static expr() {
        return squel.expr();
    }

    sortBy(sortField) {
        this.query = this.query.order(sortField);

        return this;
    }

    field(expression, alias) {
        this.query = alias ? this.query.field(expression, alias) : this.query.field(expression);

        return this;
    }

    fields(fieldsArray) {
        fieldsArray.forEach(field => this.query = this.query.field(field));

        return this;
    }

    join(table, alias, expression, noLock) {
        this.query.join(table, alias, expression, undefined, noLock);

        return this;
    }

    left_join(table, alias, expression, noLock) {
        this.query.left_join(table, alias, expression, undefined, noLock);

        return this;
    }

    where(expression, parameter) {
        this.query.where(expression, parameter);

        return this;
    }

    update() {
        this.query = squel.update()
            .table(this.table);

        return this;
    }

    setFields(fields) {
        this.query.setFields(fields);
        
        return this;
    }

    set(field, value) {
        if (value || value === null)
            this.query.set(field, value);
        else
            this.query.set(field);

        return this;
    }

    insert(fields) {
        for (const field in fields) {
            if (Array.isArray(fields[field])) {
                fields[field] = this._forArrayTypeFields(fields[field]);
            }
        }
        this.query = squel
            .insert()
            .into(this.table)
            .setFields(fields);

        return this;
    }

    insertMany(rowsOfFields) {
        this.query = squel
            .insert()
            .into(this.table)
            .setFieldsRows(rowsOfFields);

        return this;
    }

    build() {
        if (this.multipleQueries)
            return this.multipleQueries;

        return this.query;
    }

    delete() {
        this.query = squel.delete()
            .from(this.table);
        return this;
    }

    offset(limit, offset) {
        this.query = this.query.offset(offset).limit(limit);

        return this;
    }

    _forArrayTypeFields(field) {
        return JSON.stringify(field).replace(/\[/g, '{').replace(/]/g, '}');
    }
}
module.exports = QueryHelper;