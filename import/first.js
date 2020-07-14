var dbObj = {}

dbObj.users = [
    {
        name:'John',
        role:'Admin'
    },
    {
        name:'Bhumika',
        role:'SuperAdmin'
    }
]

dbObj.dbquery = {
    find:(table)=>{return `Select * from ${table}`},
    insert:(table,dbObj)=>{return `insert into ${table} name,city VALUES(${dbObj.name},${dbObj.city})`}
}

///module.exports = dbObj;
export default dbObj;