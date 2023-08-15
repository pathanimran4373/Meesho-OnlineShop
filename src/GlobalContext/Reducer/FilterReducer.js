const FilterReducer = (state, action) => {

    switch (action.type) {

        case "SHOW_ALLPRODUCT":
            return {
                ...state,
                ProductpageData: [...action.payload],
                AllFilterProduct: [...action.payload],
            };

        case "SET_GREEDVIEW":
            return {
                ...state,
                GridView: true,
            };
        case "SET_LISTVIEW":
            return {
                ...state,
                GridView: false,
            };

        //sort product by a to z


        case "GET_SORT_VALUE":
            return {
                ...state,
                sorting_value: action.payload,
            }
        case "SORTING_PRODUCT":
            let newSortdata;
            const { ProductpageData, sorting_value } = state;
            let tempSortProduct = [...ProductpageData];

            const sortingProduct = (a, b) => {
                if (sorting_value === "lowest") {
                    return a.price - b.price;
                }

                if (sorting_value === "highest") {
                    return b.price - a.price;
                }
                if (sorting_value === "a-z") {
                    return a.name.localeCompare(b.name);
                }

                if (sorting_value === "z-a") {
                    return b.name.localeCompare(a.name);
                }
            };
            newSortdata = tempSortProduct.sort(sortingProduct);

            return {
                ...state,
                ProductpageData: newSortdata,
            }
//filter product by input box

        case "INPUTFILTER_VALUE":
            const { name, value } = action.payload;

            return {
                ...state,
                InputFilter: { ...state.InputFilter, [name]: value, },

            };

        case "SEARCH_VALU_BYINPUT":

            let { AllFilterProduct } = state;
            let filterInputItem = [...AllFilterProduct];

            const { text, category, company, color } = state.InputFilter;

            if (text) {
                filterInputItem = filterInputItem.filter((curitem) => {
                    return curitem.name.toLowerCase().includes(text);
                });
            }

            if (category !== "all") {
                filterInputItem = filterInputItem.filter((curelem) => {
                    return curelem.category === category;
                });
            }
            if (company !== "all") {
                filterInputItem = filterInputItem.filter((curelem) => {
                    return curelem.company.toLowerCase() === company.toLowerCase();
                });
            }
            if (color !== "all") {
                filterInputItem = filterInputItem.filter((curelem) => {
                    return curelem.colors.includes(color);
                });
            }
            return {
                ...state,
                ProductpageData: filterInputItem,
            };

//remove all filter function

case "CLEAR_ALL_FILTER":
    return{
        ...state,
        InputFilter:{text:"", category:"all", company:"all", color:"all"},

    }


        default: return state;

    }

}


export default FilterReducer