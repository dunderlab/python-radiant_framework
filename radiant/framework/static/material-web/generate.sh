find * -mindepth 1 -maxdepth 1 -name "*.js" -exec sh -c '
    if ! grep -q "harness" "$1"; then
        printf "import '"'"'@material/web/%s/%s'"'"';\n" "$(dirname "$1")" "$(basename "$1")" >> index.js
    fi
' _ {} \;
