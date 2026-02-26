import { useEffect, useMemo, useState } from "react";

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

function getBeijingParts(date: Date) {
  // Use Intl to format in Asia/Shanghai timezone, then parse stable parts.
  const fmt = new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  const parts = fmt.formatToParts(date);
  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((p) => p.type === type)?.value ?? "";

  return {
    year: get("year"),
    month: get("month"),
    day: get("day"),
    weekday: get("weekday"),
    hour: get("hour"),
    minute: get("minute"),
    second: get("second"),
    dayPeriod: get("dayPeriod"),
  };
}

export function TimeWidget() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const view = useMemo(() => {
    const p = getBeijingParts(now);
    // Normalize weekday display: zh-CN returns "周三" etc.
    const time = `${p.hour}:${p.minute}:${p.second}${p.dayPeriod}`;
    const date = `${p.year}-${p.month}-${p.day} ${p.weekday}`;
    return { time, date };
  }, [now]);

  return (
    <div className="absolute right-6 top-6 pointer-events-auto hidden xl:block text-right z-50">
      <a
        href="https://time.is/Beijing"
        rel="nofollow"
        className="text-foreground/80 hover:text-foreground transition-colors block font-medium"
        style={{ fontSize: "24px", textDecoration: "none" }}
      >
        北京时间
      </a>
      <div className="text-foreground font-mono block leading-none mt-1" style={{ fontSize: "24px", fontWeight: 300 }}>
        {view.time}
      </div>
      <div className="text-foreground/70 font-mono block leading-none mt-2" style={{ fontSize: "24px", fontWeight: 300 }}>
        {view.date}
      </div>
    </div>
  );
}
