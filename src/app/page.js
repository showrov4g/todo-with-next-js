import Image from "next/image";

export default function Home() {
  return (
   <>
      <form className="flex items-start flex-col gap-2 w-[80%] max-w-[600] mt-24 px-2 mx-auto " >
        <input type="text" name="title" placeholder="inter title" className="px-3 py-2 border-2 w-full " />
        <textarea name="description" placeholder="inter description" className="px-3 py-2 border-2 w-full "></textarea>
        <button type="submit" className="bg-orange-600 py-3 px-11 text-white">Add todo</button>
      </form>
   </>
  );
}
