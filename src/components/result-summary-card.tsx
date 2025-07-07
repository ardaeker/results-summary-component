import clsx from "clsx";
import score from "@/data.json";
import * as Icons from "@/assets/icons";

const summaryIcons = {
  memory: Icons.Memory,
  verbal: Icons.Verbal,
  visual: Icons.Visual,
  reaction: Icons.Reaction,
};

const summaryColors = {
  memory: "bg-yellow-100 text-yellow-500",
  verbal: "bg-green-100 text-green-500",
  visual: "bg-blue-100 text-blue-500",
  reaction: "bg-red-100 text-red-500",
};

export function ResultSummaryCard() {
  return (
    <section className="md:shadow-card font-hanken-grotesk md:flex md:w-full md:max-w-184 md:overflow-hidden md:rounded-4xl md:bg-white">
      <div className="max-md:shadow-card bg-gradient-card flex w-full flex-col items-center pt-6 pb-10 max-md:gap-y-6 max-md:rounded-b-4xl md:rounded-r-4xl md:pt-9.5">
        <span className="block text-lg leading-[1.43rem] font-bold text-blue-200 md:text-2xl md:leading-[1.93rem]">
          Your Result
        </span>
        <div className="bg-gradient-score flex h-35 w-35 flex-col items-center justify-center space-y-1 rounded-full md:mt-8.75 md:h-50 md:w-50">
          <span className="block text-[3.5rem] leading-[4.5rem] font-extrabold text-white md:text-7xl md:leading-[4.5rem]">
            {score.result.score}
          </span>
          <span className="block text-base leading-[1.31rem] font-bold text-blue-200 md:text-lg md:leading-[1.4375rem]">
            of 100
          </span>
        </div>
        <div className="space-y-2 text-center md:mt-7 md:space-y-3.5">
          <h1 className="text-2xl leading-[1.9375rem] font-bold text-white md:text-[2rem] md:leading-[2.625rem]">
            {score.result.rating}
          </h1>
          <p className="max-w-65 text-base leading-[1.3125rem] font-medium text-blue-200 md:text-lg md:leading-[1.4375rem]">
            {score.result.description}
          </p>
        </div>
      </div>
      <div className="bg-white px-7.5 pt-6 max-md:space-y-6 md:w-full md:rounded-r-4xl md:pt-9.5 md:pb-11.5">
        <span className="block text-lg leading-[1.4375rem] font-bold text-slate-900 md:text-2xl md:leading-[1.9375rem]">
          Summary
        </span>
        <ul className="space-y-4 md:mt-7">
          {score.summary.map((item, index) => {
            const category = item.category.toLowerCase();

            const categoryColor = summaryColors[category as keyof typeof summaryColors];
            const CategoryIcon = summaryIcons[category as keyof typeof summaryIcons];

            return (
              <li key={index} className={clsx("flex h-14 items-center justify-between rounded-xl px-4", categoryColor)}>
                <div className="flex items-center gap-x-3">
                  <CategoryIcon className="h-5 w-5" />
                  <span className="block text-base leading-[1.3125rem] font-medium md:text-lg md:leading-[1.4375rem]">
                    {item.category}
                  </span>
                </div>
                <span>
                  <span className="text-base leading-[1.3125rem] font-bold text-slate-900 md:text-lg md:leading-[1.4375rem]">
                    {item.score}
                  </span>{" "}
                  <span className="text-base leading-[1.3125rem] font-bold text-slate-900/50 md:text-lg md:leading-[1.4375rem]">
                    / {item.max_score}
                  </span>
                </span>
              </li>
            );
          })}
        </ul>

        <button className="group relative flex h-14 w-full cursor-pointer items-center justify-center overflow-hidden rounded-[8rem] bg-slate-900 px-4 text-lg leading-[1.4375rem] font-bold text-white md:mt-10.25">
          <span
            className="absolute inset-0 z-10 block bg-slate-900 transition-opacity duration-200 group-hover:opacity-0"
            aria-hidden
          />
          <span className="bg-gradient-button absolute inset-0 block" aria-hidden />
          <span className="z-20">Continue</span>
        </button>
      </div>
    </section>
  );
}
