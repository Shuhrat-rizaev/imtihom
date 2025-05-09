"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";

const LangSwitch = () => {
  const path = usePathname();
  const router = useRouter();

  const switchHandle = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value;
    const newPath = `/${newLocale}${path.replace(/^\/[a-z]{2}/, "")}`;
    router.push(newPath);
  };

  return (
    <div>
      <select
        onChange={switchHandle}
        defaultValue=""
        className="px-4 py-2 text-white font-semibold border border-gray-500 rounded-xl bg-transparent hover:bg-gray-800 transition-all shadow-md"
      >
        <option value="uz" className="bg-gray-800">
          Uz
        </option>
        <option value="en" className="bg-gray-800">
          En
        </option>
      </select>
    </div>
  );
};

export default LangSwitch;
