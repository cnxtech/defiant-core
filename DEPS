use_relative_paths = True

deps = {
  "vendor/ad-block": "https://github.com/brave/ad-block.git@11ab48c4b2bd5355e789d4c87005ab2c14eecc09",
  "vendor/autoplay-whitelist": "https://github.com/brave/autoplay-whitelist.git@458053a3c95b403cbe0872f289a2aafa106ee9d8",
  "vendor/extension-whitelist": "https://github.com/gab-ai-inc/defiant-extension-list.git@d5ae31a261501396b3e43d706f03352aa6fd1670",
  "vendor/tracking-protection": "https://github.com/brave/tracking-protection.git@29b1f86b11a8c7438fd7d57b446a77a84946712a",
  "vendor/hashset-cpp": "https://github.com/brave/hashset-cpp.git@4b55fe39bb25bb0d8b11a43d547d75f00c6c46fb",
  "vendor/bloom-filter-cpp": "https://github.com/brave/bloom-filter-cpp.git@9be5c63b14e094156e00c8b28f205e7794f0b92c",
  "vendor/requests": "https://github.com/kennethreitz/requests@e4d59bedfd3c7f4f254f4f5d036587bcd8152458",
  "vendor/boto": "https://github.com/boto/boto@f7574aa6cc2c819430c1f05e9a1a1a666ef8169b",
  "vendor/python-patch": "https://github.com/svn2github/python-patch@a336a458016ced89aba90dfc3f4c8222ae3b1403",
  "vendor/omaha":  "https://github.com/brave/omaha.git@22dec7e124881ba2c7e8f331d18d9c4dd40ed207",
  "vendor/sparkle": "https://github.com/brave/Sparkle.git@c0759cce415d7c0feae45005c8a013b1898711f0",
  "vendor/bat-native-rapidjson": "https://github.com/brave-intl/bat-native-rapidjson.git@86aafe2ef89835ae71c9ed7c2527e3bb3000930e",
  "vendor/bip39wally-core-native": "https://github.com/brave-intl/bip39wally-core-native.git@9b119931c702d55be994117eb505d56310720b1d",
  "vendor/bat-native-anonize": "https://github.com/brave-intl/bat-native-anonize.git@b8ef1a3f85aec0a0522a9230d59b3958a2150fab",
  "vendor/bat-native-tweetnacl": "https://github.com/brave-intl/bat-native-tweetnacl.git@1b4362968c8f22720bfb75af6f506d4ecc0f3116",
  "components/brave_sync/extension/brave-sync": "https://github.com/brave/sync.git@e97e9e912552cd789cb2c1b1f327c77b32175317",
  "components/brave_sync/extension/brave-crypto": "https://github.com/brave/crypto@64f63b167695fc7f0db72e1748ca27142653fe33",
  "vendor/bat-native-usermodel": "https://github.com/brave-intl/bat-native-usermodel.git@c1745b906079285fc01e3079ac49b0e65fde0f98",
  "vendor/challenge_bypass_ristretto_ffi": "https://github.com/brave-intl/challenge-bypass-ristretto-ffi.git@2c0e28f76e4b6f53947bf4faa5afd93614f96aca",
}

hooks = [
  {
    'name': 'bootstrap',
    'pattern': '.',
    'action': ['python', 'src/brave/script/bootstrap.py'],
  },
  {
    # Download rust deps if necessary
    'name': 'download_rust_deps',
    'pattern': '.',
    'action': ['python', 'src/brave/script/download_rust_deps.py'],
  },
  {
    # Build brave-sync
    'name': 'build_brave_sync',
    'pattern': '.',
    'action': ['python', 'src/brave/script/build-simple-js-bundle.py', '--repo_dir_path', 'src/brave/components/brave_sync/extension/brave-sync'],
  },
  {
    # Build brave-crypto
    'name': 'build_brave_crypto',
    'pattern': '.',
    'action': ['python', 'src/brave/script/build-simple-js-bundle.py', '--repo_dir_path', 'src/brave/components/brave_sync/extension/brave-crypto'],
  }
]
