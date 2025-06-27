// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    rules: {
      'import/no-duplicates': 'off',
    },
  },
  // Your custom configs here
)
