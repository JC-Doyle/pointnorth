export const state = () => ({
    index: 0,
    projectList: ["Talbragar", "Jameson", "Cawdor"],
    wordList: ["elegant", "smart", "stunning"],
    project: "Talbragar",
    word: "elegant"
  })

export const getters = {}
export const mutations = {
    nextProject (state) {
      if (state.index === 2) {
        state.index = 0
      } else {
        state.index = state.index + 1
      }
      state.project = state.projectList[state.index]
      state.word = state.wordList[state.index]
    }
}