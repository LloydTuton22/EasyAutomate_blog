import React, { useState, useEffect }from 'react';
import Link from 'next/Link';
import { getCategories } from '../services';


const Header = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      getCategories().then((newCategories) => {
        setCategories(newCategories);
      });
    }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
        <div className="border-b w-full inline-block border-green-300 pt-8">
            <div className="md:float-left block">
                <Link href="/">
                    <span className="cursor-pointer font-bold text-4xl text-white">
                        Easy Automate
                    </span>
                </Link>
                <p className="text-white italic text-sm py-3">Power Platform dev blog ✍️</p>
            </div>
            <div className="hidden md:float-left md:contents">
                {categories.map((category) => (
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-10 duration-50 md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>

    </div>
  )
}

export default Header