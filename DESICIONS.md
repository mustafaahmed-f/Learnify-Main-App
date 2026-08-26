# Frontend Architecture Decisions

This document records important frontend architecture and UI/UX decisions
made for the Learnify e-learning application.

The purpose of this file is to preserve architectural decisions so that
future development does not accidentally contradict previously agreed
decisions.

---

<a id="table-of-contents"></a>

## Table of Contents

1. [Search Feature](#1-search-feature)
   - [Search Scope](#11-search-scope)
   - [Search Bar](#12-search-bar)
   - [Search Suggestions](#13-search-suggestions)
   - [Search Results Page](#14-search-results-page)
   - [Search Result Tabs](#15-search-result-tabs)
   - [Discovery Sections](#16-discovery-sections)
   - [See All Navigation](#17-see-all-navigation)
   - [Filtering, Sorting and Pagination](#18-filtering-sorting-and-pagination)
   - [Search State](#19-search-state)
   - [Data Fetching and Client Cache](#110-data-fetching-and-client-cache)
   - [Responsive Search UI](#111-responsive-search-ui)

---

# 1. Search Feature

The global search feature allows users to search across:

- Courses
- Instructors
- Live Classes

The search experience is divided into two stages:

1. Search suggestions shown while typing in the navbar.
2. Search Results / Discovery page shown after selecting "See more results".

The search experience is intended to provide discovery rather than
returning every possible result immediately.

[↑ Back to Table of Contents](#table-of-contents)

---

## 1.1 Search Scope

The global search feature searches across three main entities:

- Courses
- Instructors
- Live Classes

The search experience has two primary purposes:

1. **Quick discovery** while the user is typing.
2. **Discovery of categorized results** on the Search Results page.

The search feature should not return every possible result during the
initial discovery stage.

[↑ Back to Table of Contents](#table-of-contents)

---

## 1.2 Search Bar

The navbar contains the global search bar.

The search bar contains:

- Search input
- Search type/filter control
- Search suggestions dropdown

The available top-level search types are:

- All
- Courses
- Instructors
- Live Classes

The selected search type should not consume excessive space inside the
search input, especially on smaller screens.

The selected filter should therefore be presented in a compact way that
does not significantly reduce the available search-input width.

[↑ Back to Table of Contents](#table-of-contents)

---

## 1.3 Search Suggestions

Search suggestions are displayed in the dropdown below the search bar.

The suggestions are intended to be lightweight previews rather than
complete search results.

The dropdown can contain results from:

- Courses
- Instructors
- Live Classes

Only a small number of results should be returned/displayed per entity.

The exact number may evolve, but the current UI is designed around a
small preview set.

A "See more results" action navigates the user to the Search Results page.

[↑ Back to Table of Contents](#table-of-contents)

---

## 1.4 Search Results Page

The Search Results page uses the search value as part of the route.

Current route structure:

    /search/[searchVal]

The search value represents the user's search query.

The selected entity type is represented using a query parameter:

    /search/react
    /search/react?type=courses
    /search/react?type=instructors
    /search/react?type=live-classes

If `type` is absent, the page defaults to the `All` tab.

Only allowed type values are accepted.

If the user manually provides an invalid `type` value, the page should
return the application's not-found page.

The Search Results page is primarily a discovery page, not a full
pagination/filtering interface.

[↑ Back to Table of Contents](#table-of-contents)

---

## 1.5 Search Result Tabs

The Search Results page has four tabs:

- All
- Courses
- Instructors
- Live Classes

Changing the tab changes the `type` query parameter.

The tab navigation should preserve the search value while changing the
selected type.

Examples:

    /search/react
    /search/react?type=courses
    /search/react?type=instructors
    /search/react?type=live-classes

The `type` parameter represents the currently displayed entity and is
primarily a UI/navigation concern.

The discovery request itself is based on the search value, not on the
selected tab.

[↑ Back to Table of Contents](#table-of-contents)

---

## 1.6 Discovery Sections

The Search Results page is a discovery page rather than a full
search-management page.

Therefore, it does NOT initially provide:

- Pagination
- Advanced filtering sidebar
- Full sorting controls

Instead, each entity is represented using reusable discovery sections.

Discovery sections should be implemented as reusable components because
they will also be used outside the Search Results page, especially on
entity pages such as the Courses page.

The shared discovery UI belongs in the global:

    _components/Discovery

folder rather than inside the Search Results feature.

### Courses

Possible discovery sections include:

- Most Relevant
- Newest
- Trending
- Other useful discovery categories

### Instructors

Possible discovery sections include:

- Most Relevant / Top
- Highly Rated
- New Instructors
- Other useful discovery categories

### Live Classes

Possible discovery sections include:

- Upcoming
- Starting Soon
- Other useful discovery categories

The exact sections can evolve as the application develops.

Discovery sections should be horizontally scrollable and display a limited
number of items.

Each section can contain a "See All" action.

[↑ Back to Table of Contents](#table-of-contents)

---

## 1.7 See All Navigation

The Search Results page does not display the complete result set.

When the user clicks "See All" for a discovery section, navigation moves to
the corresponding entity page.

For example:

    /courses?q=react&section=relevant

or:

    /courses?q=react&section=newest

The Courses page is responsible for displaying the full grid of results.

The same principle applies to:

- Live Classes
- Instructors

The entity pages provide the full exploration experience, including
pagination, filtering and sorting where applicable.

The search value (`q`) is passed to the entity page so that the results
remain related to the original search.

The entity page may provide a "Back to Search Results" action when it has
been entered from the Search Results discovery flow.

The navigation should preserve enough URL state to allow the user to
return to the relevant search context when necessary.

[↑ Back to Table of Contents](#table-of-contents)

---

## 1.8 Filtering, Sorting and Pagination

Filtering, sorting and pagination are NOT part of the Search Results
discovery page.

They belong to the full entity pages where results are displayed as grids
or other complete result views.

Examples:

    /courses?q=react&page=2

    /courses?q=react&category=frontend&page=1

The exact query parameter names and filter structures for each entity will
be decided when the corresponding entity page is implemented.

The Search Results page should remain focused on discovery and navigation
toward the full entity result pages.

[↑ Back to Table of Contents](#table-of-contents)

---

## 1.9 Search State

A global Search Context/Provider is not required.

The Search Component owns the state required for the search interaction.

The previous Search Context/Provider approach was intentionally removed.

Local UI state such as:

- Current input value
- Dropdown visibility
- Selected search type

can remain inside the appropriate client components.

TanStack Query is responsible for managing server data and caching.

The same Search Component may be rendered in different locations depending
on screen size without requiring a global Search Context.

[↑ Back to Table of Contents](#table-of-contents)

---

## 1.10 Data Fetching and Client Cache

Search discovery data is fetched on the client using TanStack Query.

The primary reason for this decision is to allow the search results fetched
while the user is typing to be reused when navigating to the Search Results
page.

The query key should be based on the search value.

Example:

    ["search-discovery", searchValue]

The `type` parameter is NOT part of the discovery query key because the
discovery response contains the data required for all entity tabs.

For example:

    /search/react
    /search/react?type=courses
    /search/react?type=instructors

can all use the same discovery dataset for:

    searchValue = "react"

When the data exists and is considered fresh by TanStack Query, changing
the tab should not require another Search API request.

If the Search Results page is opened directly, or the client cache does not
contain the required data, TanStack Query performs the Search API request.

### Search Discovery Data

The Search API returns a limited discovery dataset containing results for
the searchable entities.

The response is intentionally small because it is used for discovery
rather than complete result browsing.

The same discovery dataset can be used by:

- Search suggestions
- Search Results page
- Search Result tabs

The exact backend response structure will be finalized during Search
Service design.

[↑ Back to Table of Contents](#table-of-contents)

---

## 1.11 Responsive Search UI

The search component is reused in different positions depending on screen
size.

For large screens, the search bar is positioned within the navbar.

For smaller screens, the search bar is positioned below the main navbar
content to provide better usability.

The same Search Component can therefore be rendered in different responsive
locations.

The implementation should avoid duplicating search state unnecessarily.

TanStack Query provides the shared server-data cache between instances of
the Search Component.

The responsive layout should ensure that the search input retains
reasonable width on smaller screens and that the selected search filter
does not unnecessarily consume search-bar space.

[↑ Back to Table of Contents](#table-of-contents)

---

# Notes

This document records confirmed architectural decisions.

Ideas that have not yet been finalized should not be treated as decisions.

Backend Search Service architecture, Redis deployment strategy, exact
search ranking, cache TTLs, and search API contracts will be documented
separately in the backend `DECISIONS.md` once those decisions are finalized.
