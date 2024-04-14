/* eslint-disable no-unused-vars */

// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useState } from "react";
import { FaImage } from "react-icons/fa";
import { LuUserCircle } from "react-icons/lu";


export default function ProductUploadForm() {

  const [productName, setProductName]= useState('')
  const [review, setReview]= useState(5)
  const [price, setPrice]=useState("")
  const [videoLink, setVideoLink]= useState("")
  const [otherLink, setOtherLink]= useState("")
  const [category, setCategory]= useState("")
  const [subCategory, setSubCategory]= useState("")
  const [image, setImage]= useState([])
  const [description, setDescription]= useState('')
  const [variants, setVariants]= useState('')
  const [featured, setFeatured]= useState("")
  const [discount, setDiscount]= useState('')
  const [extra , setExtra] = useState({})

  const [img1, setImg1]= useState("")
  const [img2, setImg2]= useState("")
  const [img3, setImg3]= useState("")
  const [img4, setImg4]= useState("")
  
  return (
    <form>
      <div className="space-y-12">
        

        <div className="border-b border-gray-900/10 pb-12">

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="productName"className="block text-sm font-medium leading-6 text-gray-900">
                Product Name
              </label>
              <div className="mt-2">
                <input
                 onChange={e=>setProductName(e.target.value)} 
                  type="text"
                  name="product-name"
                  id="product-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="review" className="block text-sm font-medium leading-6 text-gray-900">
                Review
              </label>
              <div className="mt-2">
                <input
                  onChange={e=>setReview(e.target.value)}
                  type="number"
                  name="review"
                  id="review"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="Regular Price" className="block text-sm font-medium leading-6 text-gray-900">
                Regular Price
              </label>
              <div className="mt-2">
                <input
                  onChange={e=>setPrice(e.target.value)}
                  type="text"
                  name="price"
                  id="price"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="Regular Price" className="block text-sm font-medium leading-6 text-gray-900">
                Discount Price
              </label>
              <div className="mt-2">
                <input
                  onChange={e=>setDiscount(e.target.value)}
                  type="text"
                  name="discount"
                  id="discount"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                Description
              </label>
              <div className="mt-2">
                <textarea
                onChange={e=>setDescription(e.target.value)}
                  id="description"
                  name="description"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
            </div>


            <div className="sm:col-span-3">
              <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                Category
              </label>
              <div className="mt-2">
                <select
                  id="category"
                  name="category"
                  autoComplete="category"
                  onChange={e=>setCategory(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Head Phone</option>
                  <option>Monitor</option>
                  <option>Mouse</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="featured" className="block text-sm font-medium leading-6 text-gray-900">
                Featured
              </label>
              <div className="mt-2">
                <select
                  id="featured"
                  name="featured"
                  autoComplete="featured"
                  onChange={e=>setFeatured(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>StockOut</option>
                  <option>TopRated</option>
                  <option>Regular</option>
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Video Link
              </label>
              <div className="mt-2">
                <input
                onChange={e=>setVideoLink(e.target.value)}
                  type="text"
                  name="video"
                  id="video"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-full">
              <label htmlFor="Other Link" className="block text-sm font-medium leading-6 text-gray-900">
                Other links
              </label>
              <div className="mt-2">
                <input
                onChange={e=>setOtherLink(e.target.value)}
                  type="text"
                  name="otherLink"
                  id="otherLink"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            
            <div className="col-span-full">
              <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
              <LuUserCircle/>
                {/* <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" /> */}
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Change
                </button>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Cover photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                <FaImage></FaImage>
                  {/* <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" /> */}
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  )
}
