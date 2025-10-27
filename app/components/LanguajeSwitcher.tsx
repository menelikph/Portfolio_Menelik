"use client";

import { Select, SelectItem } from "@heroui/react";
import { useI18n } from "../context/I18nContext";
import { Languages } from "lucide-react";
import { locales, getLocaleDisplayName } from "../i18n";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <div className="language-switcher">
      <Select
        className="mt-5  w-full sm:w-52 "
        defaultSelectedKeys={[locale]}
        selectedKeys={[locale]}
        onChange={(e) => setLocale(e.target.value as "es" | "en")}
          startContent={<Languages />}
      >
        {locales.map((lang) => (
          <SelectItem key={lang}>{getLocaleDisplayName(lang)}</SelectItem>
        ))}
      </Select>
    </div>
  );
}
