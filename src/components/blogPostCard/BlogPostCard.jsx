import React, { useContext } from 'react';
import myContext from '../../context/data/myContext';

function BlogPostCard() {
  const context = useContext(myContext);
  const { mode } = context;

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto max-w-7xl">

          {/* Main Content */}
          <div className="flex flex-wrap justify-center -m-4 mb-5">
            {/* Card 1 */}
            <div className={`p-4 md:w-1/3 ${mode === 'dark' ? 'bg-gray-800 border-b-4 border-gray-300' : 'bg-white border-b-4 border-blue-500'}
                ${mode === 'dark' ? 'shadow-gray-700' : 'shadow-xl'}
                rounded-xl overflow-hidden hover:-translate-y-1 cursor-pointer hover:shadow-gray-400`}
            >
              {/* Blog Thumbnail */}
                <img className="w-full" src='src\assets\kasol.jpg' alt="blog" /> 

              {/* Top Items */}
              <div className="p-6">
                {/* Blog Date */}
                <h2 className={`tracking-widest text-xs title-font font-medium mb-1 ${mode === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>
                  {'25 Sep 2023'}
                </h2>

                {/* Blog Title */}
                <h1 className={`title-font text-lg font-bold mb-3 ${mode === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
                  {'Top 10 colleges of India'}
                </h1>

                {/* Blog Description */}
                <p className={`leading-relaxed mb-3 ${mode === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
                  Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            {/* ... (Similar conversion for Card 2) */}

            {/* Card 3 */}
            {/* ... (Similar conversion for Card 3) */}
          </div>

          {/* See More Button */}
          <div className="flex justify-center my-5">
            <button
              className={`px-6 py-3 rounded-md text-white ${mode === 'dark' ? 'bg-gray-800' : 'bg-blue-500'}`}
            >
              See More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogPostCard;
