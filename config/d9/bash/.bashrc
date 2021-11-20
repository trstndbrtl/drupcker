# You may uncomment the following lines if you want `ls' to be colorized:
export LS_OPTIONS='--color=auto'
# eval "`dircolors`"
alias ls='ls $LS_OPTIONS'
alias ll='ls $LS_OPTIONS -l'
alias l='ls $LS_OPTIONS -lA'

# Drush Alias
alias dcr="drush cr"
alias dex='drush cex'
alias dim='cim'

alias lsa="ls -a"
alias lsl='ls -l'
alias lsal='ls -al'

alias gst='git status'

function parse_git_branch {
   git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/(\1)/'
}

# Designed PS1
export PS1="► \A \[\e[46m\]\u\[\e[m\]\[\e[36m\]@\h\[\e[m\] ♫ \w \$(parse_git_branch) \[\e[91m\]♥\[\e[m\] "