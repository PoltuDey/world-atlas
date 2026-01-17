import React from "react";

export const Search_Filter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) => {
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const handleSelect = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };
  const sortCountries = (value) => {
    if (!value) return;
    let sortAscDes = [...countries].toSorted((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountries(sortAscDes);
  };

  return (
    <>
      <section>
        <div className="grid gap-6 mb-6 md:grid-cols-3">
          <div>
            <label
              htmlFor="search"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Search
            </label>
            <input
              type="text"
              id="search"
              placeholder="Search"
              autoComplete="off"
              value={search || ""}
              onChange={handleSearch}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select a region
            </label>
            <select
              id="countries"
              value={filter || "all"}
              onChange={handleSelect}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="all">All</option>
              <option value="africa">Africa</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="north">Notrh America</option>
              <option value="ocenia">Ocenia</option>
              <option value="south">South America</option>
            </select>
          </div>
          {/* <div>
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full"
              onClick={() => sortCountries("asc")}
            >
              Ascending
            </button>
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full"
              onClick={() => sortCountries("des")}
            >
              Descending
            </button>
          </div> */}

          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
            onChange={(e) => sortCountries(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="asc">Ascending (A–Z)</option>
            <option value="des">Descending (Z–A)</option>
          </select>
        </div>
      </section>
    </>
  );
};
