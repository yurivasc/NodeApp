var menu =
    [
        { id: 1, name: "Javascript", isMenuOnly: true, parentId: 0, order: 1 },
        { id: 3, name: "filter", isMenuOnly: true, parentId: 2, order: 1 },
        { id: 2, name: "Arrays", isMenuOnly: true, parentId: 1, order: 1 },
        { id: 4, name: "includes", isMenuOnly: false, parentId: 2, order: 1 },
        { id: 5, name: "C#", isMenuOnly: true, parentId: 0, order: 1 },
        { id: 6, name: "Something", isMenuOnly: true, parentId: 5, order: 1 },
        { id: 7, name: "Else", isMenuOnly: true, parentId: 6, order: 1 },
        { id: 8, name: "AAA", isMenuOnly: false, parentId: 7, order: 1 },
        { id: 35, name: "filter-another", isMenuOnly: false, parentId: 3, order: 1 },

    ]

const mf = (parentItem) => {
    console.log(parentItem.name);
    menu.filter(item => item.parentId == parentItem.id).map(item => {
        if (item.isMenuOnly) {
            mf(item);
        } else {
            console.log(item.name);
        }
    })
}

// mf(menu[0]);

menu.filter(x => x.parentId == 0).forEach(x => mf(x));
