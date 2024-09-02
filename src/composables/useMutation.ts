import { ref } from 'vue'

interface UseMutationOptions<T, Args extends any[]> {
  mutationFn: (...args: Args) => Promise<T>
  onSuccess?: (data: T) => void
  onError?: (error: unknown) => void
}

export function useMutation<T, Args extends any[]>({
  mutationFn,
  onSuccess,
  onError
}: UseMutationOptions<T, Args>) {
  const data = ref<T>()
  const isLoading = ref(false)
  const error = ref<unknown>(null)

  const mutation = async (...args: Args) => {
    isLoading.value = true
    try {
      const result = await mutationFn(...args)
      data.value = result
      onSuccess?.(result)
    } catch (e) {
      error.value = e
      onError?.(e)
    } finally {
      isLoading.value = false
    }
  }

  return { data, isLoading, error, mutation }
}
