/* eslint-disable react/prop-types */

const CategoryItem = ({name}) => {
    return (
        <p className="m-2 border-indigo-500 bg-indigo-200 border rounded-md px-4 py-2">{name}</p>
    );
};

export default CategoryItem;