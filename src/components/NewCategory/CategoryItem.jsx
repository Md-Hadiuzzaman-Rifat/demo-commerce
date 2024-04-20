/* eslint-disable react/prop-types */

const CategoryItem = ({item}) => {
  const {description, images}= item || {}
  console.log(description, images[0].filename);

  
  return (
    <div>
       <a
        href="#"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full rounded-t-lg h-76 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={`http://localhost:20200/Images/${images[0].filename}`}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 md:text-2xl text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Full Sleeve
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
           Full Sleeves are always in tranding ..
          </p>
        </div>
      </a>

    </div>

  );
};

export default CategoryItem;
