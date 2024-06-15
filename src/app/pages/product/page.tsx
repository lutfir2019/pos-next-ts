"use client";

import ButtonBase from "@/components/global/button/base";
import Modal from "@/components/global/modal/modal";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useProduct } from "@/stores/product/useProduct";
import { useLayout } from "@/stores/useLayout";

const Page = () => {
  const productStore = useProduct();
  const [isOpen, setIsOpen] = useState(false);
  const layoutStore = useLayout();

  useEffect(() => {
    productStore.getProduct();
  }, []);

  return (
    <div className="flex flex-col relative overflow-x-auto gap-2">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Rating
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {productStore.data?.map((data) => (
            <tr
              key={data.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {data.title}
              </th>
              <td className="px-6 py-4">⭐{data.rating}</td>
              <td className="px-6 py-4">{data.category}</td>
              <td className="px-6 py-4">{data.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {productStore.is_loading && "Loading..."}
      <ButtonBase
        theme="primary"
        onClick={() => layoutStore.setLayout({ show: true })}
      >
        test
      </ButtonBase>
      <ButtonBase theme="secondary" onClick={() => setIsOpen(!isOpen)}>
        Modal
      </ButtonBase>
      {isOpen}
      <Modal open={isOpen}>
        <div className="flex flex-col w-[50%] p-10 bg-white rounded-lg">
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi omnis
            culpa alias excepturi perspiciatis, amet porro, ea deserunt voluptas
            dolores nulla enim aliquam doloremque et, repudiandae ducimus sed
            unde? Nisi? Beatae, dolorum cum sed fugit error id ut culpa
            perspiciatis voluptatibus nesciunt maiores doloribus eaque. At
            explicabo nobis repudiandae iusto laboriosam sunt ex quod aspernatur
            quis? Veritatis eveniet consectetur expedita. Suscipit, qui
            mollitia? Ut facilis laborum delectus odio, consectetur deserunt
            labore exercitationem fuga quam ipsum, dolorum officiis unde
            aspernatur totam molestiae deleniti minus. Nihil sunt rerum cumque
            dolore officia ad. &nbsp;
            <Link href="/auth">Auth</Link>
          </p>
          <button type="button" onClick={() => setIsOpen(false)}>
            close
          </button>
        </div>
      </Modal>
    </div>
  );
};
export default Page;
