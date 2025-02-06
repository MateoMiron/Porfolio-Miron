import { useLanguage } from "./LanguageContext"

export function TechStack() {
  const { t } = useLanguage()

  const skills = [
    { name: t("skills.levels.react.name"), level: 85, description: t("skills.levels.react.description") },
    { name: t("skills.levels.typescript.name"), level: 80, description: t("skills.levels.typescript.description") },
    { name: t("skills.levels.python.name"), level: 90, description: t("skills.levels.python.description") },
    { name: t("skills.levels.postgresql.name"), level: 75, description: t("skills.levels.postgresql.description") },
    { name: t("skills.levels.nodejs.name"), level: 82, description: t("skills.levels.nodejs.description") },
    { name: t("skills.levels.sqlite.name"), level: 88, description: t("skills.levels.sqlite.description") },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="skills">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center neon-text pixelated">{t("skills.title")}</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Vault Boy Image on the left */}
          <div className="relative">
              <img
                src="./src/vault-boy-pixel.png"
                alt="Vault Boy"
                className="w-full h-auto max-w-[400px] mx-auto pixelated floating"
              />
          </div>

          {/* Skills on the right */}
          <div className="neon-box p-6 relative">
            <div className="absolute inset-0 grid-background opacity-20"></div>
            <div className="relative">
              <p className="text-[#4ade80]/80 mb-6 pixelated">{t("skills.description")}</p>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="relative">
                    <div className="flex justify-between mb-1">
                      <span className="text-[#4ade80] font-bold pixelated">{skill.name}</span>
                      <span className="text-[#4ade80] pixelated">{skill.level}/100</span>
                    </div>
                    <div className="h-3 bg-[#0a0a0a] rounded-full overflow-hidden border border-[#4ade80]/50">
                      <div
                        className="h-full bg-[#4ade80] transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <p className="text-[#4ade80]/70 text-xs mt-1 pixelated">{skill.description}</p>
                  </div>
                ))}
              </div>
              <div className="scanline"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}