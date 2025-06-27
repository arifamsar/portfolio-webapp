export default defineEventHandler(() => {
  return {
    title: "My Skills",
    description: "A list of technologies and tools I'm proficient in.",
    skills: [
      {
        name: "Languages",
        items: [
          { name: "Kotlin", icon: "i-mdi-language-kotlin" },
          { name: "Java", icon: "i-mdi-language-java" },
          { name: "Python", icon: "i-mdi-language-python" }
        ]
      },
      {
        name: "Frameworks & Libraries",
        items: [
          { name: "Jetpack Compose", icon: "i-mdi-android" },
          { name: "Android SDK", icon: "i-mdi-android" },
          { name: "Retrofit", icon: "i-mdi-api" },
          { name: "Room Database", icon: "i-mdi-database" },
          { name: "Dagger/Hilt", icon: "i-mdi-dagger" },
          { name: "Coroutines & Flow", icon: "i-mdi-sync" },
          { name: "Firebase", icon: "i-mdi-firebase" }
        ]
      },
      {
        name: "Tools & Concepts",
        items: [
          { name: "Android Studio", icon: "i-mdi-android-studio" },
          { name: "Git & GitHub", icon: "i-mdi-git" },
          { name: "RESTful APIs", icon: "i-mdi-api" },
          { name: "MVVM / MVI Architecture", icon: "i-mdi-architecture" },
          { name: "Clean Architecture", icon: "i-mdi-architecture" },
          { name: "Unit Testing", icon: "i-mdi-test-tube" },
          { name: "UI/UX Principles", icon: "i-mdi-palette" }
        ]
      }
    ]
  }
})