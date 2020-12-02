export const state = () => ({
    projectsExpanded: true,
    sidebarExpanded: true,
  })

export const mutations = {
    toggleProject (state) {
      if (state.projectsExpanded) {
        state.projectsExpanded = false
      } else {
        state.projectsExpanded = true
      }
    },
    toggleSidebar (state) {
      if (state.sidebarExpanded) {
        state.sidebarExpanded = false
      } else {
        state.sidebarExpanded = true
      }
    },

  }
  

