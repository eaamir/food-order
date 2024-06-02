import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className=" flex flex-row justify-around items-center py-[15px] shadow-[0px_1px_5px] shadow-orange-300 sticky top-0 ">
      <div>
        <Image
          className=" w-[65px] "
          src="/user.png"
          width={500}
          height={500}
        />
      </div>
      <div>
        <ul className=" text-black flex flex-row justify-center items-center gap-[75px] text-[15px] ">
          <li>
            <Link
              className=" text-orange-500 border-[2px] border-orange-500 px-[13px] py-[7px] rounded-xl hover:bg-orange-600 hover:text-white transition "
              scroll={false}
              href=""
            >
              سفارش آنلاین
            </Link>
          </li>
          <li>ارتباط با ما</li>
          <li>درباره ما</li>
        </ul>
      </div>
      <div>
        <h1 className=" text-orange-500 font-bold text-[23px] ">تهیه غذا</h1>
      </div>
    </div>
  );
}
