export const useRedirectIfAuthenticated = (url = "/") => {
  const user = useSupabaseUser();

  watch(
    user,
    (value) => {
      if (value) {
        return navigateTo(url);
      }
    },
    { immediate: true }
  );

  return { user };
};
