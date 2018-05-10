app.route('/strains/id/:rowId')
        .get(strain.getItemById)
        .put(strain.updateItem)
        .delete(strain.deleteItem);