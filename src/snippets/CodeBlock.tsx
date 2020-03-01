import React, { useState } from "react";

export type Props<A extends Record<string, string>> = {
  ts: A;
  purs: A;
};

enum Language {
  ts = "TypeScript",
  purs = "PureScript"
}

export const CodeBlock = <A extends Record<string, string>>(
  props: Props<A>
) => {
  const options = Object.keys(props.ts);
  const [selectedLanguage, setSelectedLanguange] = useState(Language.ts);
  const [selectedSyntax, setSelectedSyntax] = useState(options[0]);

  return (
    <div className="CodeBlock">
      <div className="buttons">
        <div className="language">
          {["ts", "purs"].map(l => (
            <button
              key={l}
              className={
                (l === "ts"
                ? selectedLanguage === Language.ts
                : selectedLanguage === Language.purs)
                  ? "active"
                  : ""
              }
              onClick={() =>
                setSelectedLanguange(l === "ts" ? Language.ts : Language.purs)
              }
            >
              {l === "ts" ? Language.ts : Language.purs}
            </button>
          ))}
        </div>
        {options.length > 1 && (
          <div className="syntax">
            {options.map(o => (
              <button
                className={selectedSyntax === o ? "active" : ""}
                key={o}
                onClick={() => setSelectedSyntax(o)}
              >
                {o}
              </button>
            ))}
          </div>
        )}
      </div>

      <div
        className="code"
        dangerouslySetInnerHTML={{
          __html:
            props[selectedLanguage === Language.ts ? "ts" : "purs"][
              selectedSyntax
            ]
        }}
      />
    </div>
  );
};
