export const state = () => ({
    currentPage: "About",
    projectsExpanded: true,
    sidebarExpanded: true,
    projects: [
      {
        name: "Talbragar",
        intro: "Launched in early 2018 as a multi-unit development of four modern and contemporary homes in a quiet cul-de-sac within Craighall. Our clients had the option of choosing from varied house designs. Homes were then pre-sold (off-plan) by mid-2018 to expectant buyers. Construction began in early 2019 a year later.",
        stands: "4 Units",
        location: "Craighall, Johannesburg",
        constructed: "2019/20",
        costs: "R?? Million",
        catch: "A new benchmark in terms of quality, design and contemporary appeal."
      },
      {
        name: "Jameson",
        intro: "A project initiated by Point North Properties in 2013. The land portion of 2974 m2 located in the premier suburb of Melrose, Johannesburg, was secured and purchased in late 2013 - subdivision for two dwelling units was later approved by the City of Johannesburg through town planners, Breda Lombard. Stand A on Jameson, a 700m2 build works on a 1250m2 stand, with 4 bedrooms en-suite, 3 garages, generous living and entertainment area was completed and handed over for occupation in mid-2015. Land and build works contract sum: R 9,5 million. Stand B on Jameson, a 770m2 build works on a 1500m2 stand, commenced construction in early 2016 and was completed 12 months later. The home has excellent modern finishes and spaces with a high focus on open living accessing a stunning landscaped garden.",
        stands: "2 (2974/1250m2)",
        location: "Craighall, Johannesburg",
        constructed: "2013/14",
        costs: "R13.2 Million",
        catch: "A traditional, yet contemporary feel with high quality finishes and state of the art home automation."
      },
      {
        name: "Cawdor",
        intro: "Cawdor is the next and most highly anticipated development from Point North Properties to date. The land portion extent of 4200 m2 was secured in June 2020 and is planned for eight residential units with homes ranging in size from 325m2 to 460m2 under roof on stand sizes from 420m2 to 500m2. Positioned in the prime suburb of Hurlingham on a very quiet and leafy street, it is just 3 minutes from Sandton City and Hyde Park. The property has an excellent south to north perspective with the opportunity for 2nd level views from the back stands.",
        stands: "8 (4200m2 total)",
        location: "Hurlingham, Johannesburg",
        constructed: "2020+",
        costs: "N/A",
        catch: "Launching in Q1 2021 … Watch this Space!"
      },
    ]
  })

export const mutations = {
    changePage (state, payload) {
      state.currentPage = payload.page
    },
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
    }
  }

export const getters = {
    getProjectByName: (state) => (name) => {
      return state.projects.find(project => project.name === name)
    },

    getOtherProjects: (state) => (name) => {
      var others = [];
      state.projects.forEach(project => {
        if (project.name != name) {
          others.push(project.name)
        }
      });
      return others;
    }
}
