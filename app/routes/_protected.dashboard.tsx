import { useAuth } from '../context/AuthContext';
import type { Route } from './+types/_protected.dashboard';

export function meta(_args: Route.MetaArgs): Array<{ title?: string; name?: string; content?: string }> {
  return [
    { title: 'Dashboard | Portal' },
    { name: 'description', content: 'Your dashboard' },
  ];
}

export default function Dashboard(): React.ReactElement {
  const { user } = useAuth();

  return (
    <div className="py-10">
      <header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Welcome back, {user?.firstName}!
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 py-8 sm:px-0">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Dashboard Card 1 */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="shrink-0">
                      <svg
                        className="h-6 w-6 text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Profile Status
                        </dt>
                        <dd className="text-lg font-semibold text-gray-900">Active</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dashboard Card 2 */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="shrink-0">
                      <svg
                        className="h-6 w-6 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Tasks Completed
                        </dt>
                        <dd className="text-lg font-semibold text-gray-900">12</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dashboard Card 3 */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="shrink-0">
                      <svg
                        className="h-6 w-6 text-yellow-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Pending Items
                        </dt>
                        <dd className="text-lg font-semibold text-gray-900">5</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="mt-8">
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Recent Activity
                  </h3>
                </div>
                <div className="border-t border-gray-200">
                  <ul className="divide-y divide-gray-200">
                    <li className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">
                          Updated profile information
                        </p>
                        <p className="text-sm text-gray-500">2 hours ago</p>
                      </div>
                    </li>
                    <li className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">
                          Completed onboarding
                        </p>
                        <p className="text-sm text-gray-500">1 day ago</p>
                      </div>
                    </li>
                    <li className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">
                          Account created
                        </p>
                        <p className="text-sm text-gray-500">3 days ago</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
