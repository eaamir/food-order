import Image from "next/image";

export default function Home() {
  return (
    <main className=" flex flex-row justify-center items-start h-[80vh] px-[150px] py-[50px] gap-[100px] ">
      {/* left side */}

      <div className=" w-[30%] border-[1px] border-slate-300 rounded-xl h-fit flex flex-col justify-center items-center text-[16px] gap-[15px] py-[35px] px-[15px] ">
        <h2>سبد خرید (۲)</h2>

        <div className=" flex flex-row items-center justify-between w-full h-full mt-[25px] ">
          <div className=" flex flex-row items-center gap-[25px] px-[10px] py-[5px] h-fit rounded-lg bg-stone-300 ">
            <Image
              className=" w-[15px] h-[15px] "
              src="/trash.png"
              width={48}
              height={48}
            />
            <p className=" text-white text-[18px] ">۱</p>
            <Image
              className=" w-[15px] h-[15px]"
              src="/plus.png"
              width={48}
              height={48}
            />
          </div>
          <div className=" flex flex-col gap-[10px] items-end ">
            <p>چلو خورشت قیمه (۱)</p>
            <p> تومان ۱۲۰,۰۰۰ </p>
          </div>
        </div>
        <hr className=" bg-stone-300 w-full h-[3px] rounded  "></hr>
        <div className=" flex flex-row items-center justify-between w-full mt-[20px] ">
          <div className=" flex flex-row items-center gap-[25px] px-[10px] py-[5px] h-fit rounded-lg bg-stone-300 ">
            <Image
              className=" w-[15px] h-[15px] "
              src="/trash.png"
              width={48}
              height={48}
            />
            <p className=" text-white text-[18px] ">۱</p>
            <Image
              className=" w-[15px] h-[15px]"
              src="/plus.png"
              width={48}
              height={48}
            />
          </div>
          <div className=" flex flex-col gap-[10px] items-end ">
            <p>زرشک پلو با مرغ (۱)</p>
            <p> تومان ۱۷۰,۰۰۰ </p>
          </div>
        </div>
        <hr className=" bg-stone-300 w-full h-[3px] rounded  "></hr>
        <div className=" flex flex-row-reverse justify-between w-full font-bold ">
          <p>جمع کل</p>
          <p>۲۹۰,۰۰۰ تومان</p>
        </div>
        <button className=" mt-[25px] bg-orange-600 text-white w-full py-[10px] rounded-lg ">
          پرداخت
        </button>
      </div>

      {/* right side */}

      <div className=" w-[70%] ">
        <form className=" flex flex-col gap-[35px] ">
          <div className=" flex flex-row-reverse justify-between gap-[50px] ">
            <div className=" flex flex-col gap-[5px] w-full ">
              <div className=" flex self-end flex-row-reverse justify-end items-center gap-[10px]">
                <Image src="/user02.png" width={20} height={20} />
                <labe>نام و نام خانوادگی</labe>
              </div>

              <input
                className=" border-[1px] border-slate-300 rounded-lg h-[40px] text-right px-[10px] "
                type="text"
              />
            </div>
            <div className=" flex flex-col gap-[5px] w-full ">
              <div className=" flex self-end flex-row-reverse justify-end items-center gap-[10px] ">
                <Image src="/phone.png" width={20} height={20} />
                <labe>تلفن همراه</labe>
              </div>

              <input
                placeholder="09123456789"
                className=" border-[1px] border-slate-300 rounded-lg h-[40px] w-full px-[15px]  "
                type="text"
              />
            </div>
          </div>
          <div className=" flex justify-center items-center w-full ">
            <button
              type="button"
              className="inline-flex flex-row-reverse w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              لورم
              <svg
                className="-mr-1 h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className=" flex flex-row-reverse justify-between gap-[50px] ">
            <div className=" flex flex-col gap-[5px] w-full ">
              <div className=" flex self-end flex-row-reverse justify-end items-center gap-[10px]">
                <Image src="/car.png" width={20} height={20} />
                <labe>لورم</labe>
              </div>

              <button
                type="button"
                className="inline-flex flex-row-reverse w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                جنوب
                <svg
                  className="-mr-1 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className=" flex flex-col gap-[5px] w-full ">
              <div className=" flex self-end flex-row-reverse justify-end items-center gap-[10px] ">
                <Image src="/train.png" width={20} height={20} />
                <labe>لورم</labe>
              </div>

              <input
                placeholder="لورم اپسوم"
                className=" border-[1px] border-slate-300 rounded-lg h-[40px] w-full px-[15px] text-right "
                type="text"
              />
            </div>
          </div>
          <div className=" flex flex-row-reverse justify-between gap-[50px] ">
            <div className=" flex flex-col gap-[5px] w-full ">
              <div className=" flex self-end flex-row-reverse justify-end items-center gap-[10px]">
                <Image src="/way.png" width={20} height={20} />
                <labe>لورم</labe>
              </div>

              <input
                className=" border-[1px] border-slate-300 rounded-lg h-[40px] text-right px-[10px] "
                type="text"
              />
            </div>
            <div className=" flex flex-col gap-[5px] w-full ">
              <div className=" flex self-end flex-row-reverse justify-end items-center gap-[10px] ">
                <Image src="/clock.png" width={20} height={20} />
                <labe>لورم</labe>
              </div>

              <input
                placeholder="17/03"
                className=" border-[1px] border-slate-300 rounded-lg h-[40px] w-full px-[15px] text-right "
                type="text"
              />
            </div>
          </div>
          <div className=" flex flex-row-reverse justify-between gap-[50px] ">
            <div className=" flex flex-col gap-[5px] w-full ">
              <div className=" flex self-end flex-row-reverse justify-end items-center gap-[10px]">
                <Image src="/paste.png" width={20} height={20} />
                <labe>توضیحات سفارش خود را بنویسید</labe>
              </div>

              <textarea
                placeholder="توضیحات سفارش (اختیاری)"
                className=" border-[1px] border-slate-300 rounded-lg h-[150px] w-full px-[15px] py-[10px] text-right text-nowrap "
                type="text"
              />
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
