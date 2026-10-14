const ProfileLoading = () => {
  return (
    <div className="min-h-[70vh] animate-pulse bg-gray-50/70 px-4 py-10 sm:py-14">
      <div className="mx-auto max-w-4xl">
        {/* Page Heading */}
        <div className="mb-8 space-y-3">
          <div className="h-4 w-20 rounded bg-green-100" />
          <div className="h-10 w-56 rounded-lg bg-gray-200" />
          <div className="h-4 w-full max-w-md rounded bg-gray-100" />
        </div>

        {/* Profile Card */}
        <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
          <div className="h-28 bg-green-100 sm:h-36" />

          <div className="px-5 pb-6 sm:px-8 sm:pb-8">
            {/* User Info */}
            <div className="-mt-12 flex flex-col gap-4 sm:-mt-14 sm:flex-row sm:items-end">
              <div className="h-24 w-24 shrink-0 rounded-3xl border-4 border-white bg-gray-200 sm:h-28 sm:w-28" />

              <div className="min-w-0 flex-1 space-y-3 pb-1">
                <div className="h-7 w-48 max-w-full rounded bg-gray-200" />
                <div className="h-4 w-56 max-w-full rounded bg-gray-100" />
              </div>

              <div className="h-10 w-28 rounded-xl bg-red-50" />
            </div>

            {/* Personal Information */}
            <div className="mt-8 rounded-2xl border border-gray-100 p-5 sm:p-6">
              <div className="h-6 w-36 rounded bg-gray-200" />
              <div className="mt-3 h-4 w-64 max-w-full rounded bg-gray-100" />

              <div className="mt-5 space-y-2">
                <div className="h-4 w-12 rounded bg-gray-100" />

                <div className="flex flex-col gap-3 sm:flex-row">
                  <div className="h-12 w-full rounded-xl border border-gray-100 bg-gray-50" />
                  <div className="h-12 w-full rounded-xl bg-green-100 sm:w-40 sm:shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLoading;
