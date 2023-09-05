#!/bin/bash
set -Ex

###############################################################################
############ LIST OF ENVIRONMENT VARIABLES TO BE SET BY THIS SCRIPT ###########
###############################################################################
# array of space separated list of environment variables to be set by this script
public_vars_to_fix=("DUMMY_CAPTCHA_KEY" "DUMMY_ANALYTICS_KEY")
# prefix to be used for the environment variables
new_public_prefix='NEXT_PUBLIC'
# prefix to replace
old_public_prefix='DUMMY'
###############################################################################

replace_variables() {
    local file=$1
    local stage=$2
    for var in "${public_vars_to_fix[@]}"; do
        # declare varibable with -n for name reference
        declare -n replacement_ref=$(get_var_name $var)
        sed -i "s/$var/$replacement_ref/g" $file
    done
    if [[ "$stage" = "testing" ]] || [[ "$stage" = "staging" ]]; then
        local stage_prefix=$([[ "$stage" = "testing" ]] && echo '-test' || echo '-stag')
        sed -i "s/production/${stage}/g" $file
        sed -i "s/api.agrocanje.com/api${stage_prefix}.agrocanje.com/g" $file
    fi
}

get_var_name() {
    local old=$1
    local new=$(echo $old | sed "s/$old_public_prefix/$new_public_prefix/g")
    echo $new
}

get_files() {
    local files=$(find ./.next/server ./.next/static -follow -type f -name '*.js' -o -name '*.html')
    echo ${files[@]}
}

main() {
    local files=$(get_files)
    for file in ${files[@]}; do
        replace_variables $file $stage
    done
}

stage=$NODE_ENV
echo "Running entrypoint to fix environment variables in $stage"
main
echo "DONE: Starting Next.js"
exec "$@"