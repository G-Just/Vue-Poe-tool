<template>
  <section class="container col-span-5 p-6 mx-auto font-mono">
    <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
      <div class="w-full overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr
              class="font-semibold tracking-wide text-left text-gray-900 uppercase bg-gray-100 border-b border-gray-600 text-md"
            >
              <th class="px-4 py-3">Currency</th>
              <th class="px-4 py-3">Buy</th>
              <th class="px-4 py-3">Sell</th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr class="text-gray-700">
              <td class="px-4 py-3 border">
                <div class="flex items-center text-sm">
                  <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                    <img
                      class="object-cover w-full h-full rounded-full"
                      src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lEdXBsaWNhdGUiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/7111e35254/CurrencyDuplicate.png"
                      alt=""
                      loading="lazy"
                    />
                    <div
                      class="absolute inset-0 rounded-full shadow-inner"
                      aria-hidden="true"
                    ></div>
                  </div>
                  <div>
                    <p class="font-semibold text-black">Mirror of Kalandra</p>
                  </div>
                </div>
              </td>
              <td class="px-4 py-3 font-semibold border text-ms">
                <div class="flex items-center gap-3">
                  <div
                    class="px-2 flex items-center justify-center gap-0.5 rounded-lg outline-neutral-400 outline"
                  >
                    <div class="relative w-8 h-8 rounded-full md:block">
                      <img
                        class="object-cover w-full h-full rounded-full"
                        src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lEdXBsaWNhdGUiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/7111e35254/CurrencyDuplicate.png"
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <p>1</p>
                  </div>
                  <p class="pb-1 text-2xl">&rarr;</p>
                  <div
                    class="px-2 flex items-center justify-center gap-0.5 rounded-lg outline-neutral-400 outline"
                  >
                    <p>50.5K</p>
                    <div class="relative w-8 h-8 rounded-full md:block">
                      <img
                        class="object-cover w-full h-full rounded-full"
                        src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lSZXJvbGxSYXJlIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/d119a0d734/CurrencyRerollRare.png"
                        alt=""
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-4 py-3 text-xs border">
                <span
                  class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"
                >
                  Acceptable
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Prices-page'
}
</script>
