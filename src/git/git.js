/**
 *
 * @date 2021年7月26日16:45:58
 * @description 学习 git
 *

Git的使用
首先自己创建项目的话  git init  初始化仓库
安装好git之后做全局配置
git config--global user.name
git config--global user.email 'XXX'
查看状态
git status
添加文件到缓存区
git add./ aa.txt
git add *
    git add./ 把当前目录下面的修改的  添加的文件全都提交到暂存区
缓存区到本地仓库
git commit - m ''
git commit - am ''  直接将文件夹代码提交到本地仓库（本地版本库）  省略掉了添加暂存区操作

    .gitignore, 在这个文件中可以设置要被忽略的文件或者目录。
被忽略的文件不会被提交仓储里去.
    在.gitignore中可以书写要被忽略的文件的路径，以 / 开头， 一行写一个路径，这些路径所对应的文件都会被忽略， 不会被提交到仓储中
写法
    /.idea 会忽略.idea文件
        / js 会忽略js目录里的所有文件
            / js/*.js 会忽略js目录下所有js文件

查看本地提交版本库记录  如果push到远程仓库也就是之前提交本地版本哭的commit
    git log
    git log  --oneline  在一行显示日志信息
恢复版本  本地版本库之前的版本
    git reset 参数比如--hard HEAD-0  HEAD指向上0个节点 就是最近的提交节点，会把我们自己修改的文件夹内容给覆盖掉  是针对分支的操作
    git reset --hard 远程分支 效果和 git checkout 远程分支相同 远程分支写法可以git branch -a 查看 需要带上origin/
    假如回到最初的节点  reset并不会把后面的节点从删除掉，但是git log 是看不到的
    想回去 可以git reset --hard HEAD 版本号
    git reset --mixed (默认参数) 不删除工作空间改动代码，撤销commit，并且撤销git add . 操作
    git reset --soft  不删除工作空间改动代码，撤销commit，不撤销git add . 
怎么获取版本号？
    存在git log 中的可以直接获取
    不存在的使用 git reflog  里面记录了我们版本切换记录
分支
    为什么会有分支的 概念？ 之前的代码出了BUG 新建分支解决  开发了一半的功能想备份一下，如果采用提交远程的话，别人克隆下来的代码我们的功能是不完善的，可以在开发分支开发，最后合并主分支
    创建分支：： git branch dev     刚创建的dev分支和master分支内容一羊
    查看所有分支 ： git branch   * 代表我们所在分支
    合并分支 ： git merge 分支名   把分支名合并到当前分支  合并分支时候出现冲突  因为两个分支中某个文件不一样  需要手动合并  conflict错误
冲突： 文件你也改了  我也改了  git 不知道怎么处理
    Auto-merge 失败  conflict（冲突存在某个文件）
    自己手动解决  HEAD指向当前分支的代码  下面指向其他分支代码
        自己保留需要的行   然后add  commit
推送： push
    首先远程服务器有个仓库  GitHub上面自己手动新建一个 （就有了.git文件）
    git push 远程仓库地址 《本地分支名》 《远程分支名》
    每次都写仓库地址太麻烦  可以申明变量origin为远程仓库地址
        git remote add origin <远程仓库地址>  后面使用只需要git push/pull origin 分支
    每次都写分支太麻烦 -》关联本地分支和远程分支
        git push -u origin master   //以后只需要    git push 即可推送  git pull 即可拉取
拉取  ： pull
    初始化一个空的仓库  git init
    git pull 仓库地址  《分支名》
    一种情况： 我修改了某个文件产生冲突没有提交到本地，直接git pull 会提示error  解决： 先提交到本地版本库在pull  手动解决单个文件冲突 在提交到服务器
    另一种情况： 我修改了某个文件已经提交到本地，小明修改另一个文件，已经提交到server，现在就是本地和server版本库不一样的问题，pull一下自动给我们合并小明修改的文件  会让我们书写commit描述文件，然后版本库是不是就同步了，提交我们自己修改到server

文件操作：
    首先理解仓库是什么意思，远程仓库只能算是我们备份代码的地方，他的来源仍然是本地仓库，也就是说正常使用只需要保证本地仓库的操作即可
    之前就在本地仓库里面的文件  被修改之后需要重新提交到暂存区里 显示modified 这个文件可以使用git add 提交暂存区  可以使用  git checkout -- <文件名> 撤销修改
    新添加的文件 需要git add  到暂存区

    暂存区里面的文件  git commit 直接到仓库 没毛病
    想要撤销回去呢？  git reset HEAD 文件名   git reset HEAD .撤销所有暂存取文件  回到了modefined状态

    提交到仓库的文件撤回版本git reset --hard 版本号

git branch <branch> <start point>    在通常情况下，我们都会在当前分支的基础上，创建新分支。比如git branch new_branch

也许你不知道，我们还可以基于当前分支的某一次commit来创建分支   也可以使用git checkout -b <new_branch> <start point>

当远程仓库创建了新的分支的时候  本地仓库并没有  使用git fetch 进行同步分支  origin/master、origin/xinjian 等就是指向远程分支的指针  git fetch会新建xinjian分支 可以git
checkout xinjian 到这个分支  并且这个分支会跟踪到远程分支xinjian

git pull 的功能分解就是  git fetch   然后合并分支  git merge origin/xinjian
git rebase
     场景一：如何合并多次提交纪录？
     git rebase -i  [startpoint]  [endpoint]
     如果不指定[endpoint]，则该区间的终点默认是当前分支HEAD所指向的commit
    常用指令: s   squash：将该commit和前一个commit合并（缩写:s）
            pick：保留该commit（缩写:p）
    场景二：分支合并
        dev分支基于master v1.0开发,后面出了master 2.0 想要dev合并master 2.0的内容
        我们使用git merge 合并分支时候我们觉得这样污染了 commit 记录，想要保持一份干净的 commit, 这时候就使用git rebase
        在dev 分支 git rebase master
        命令做了啥: 
        git 会把 dev 分支里面的每个 commit 取消掉；
            其次，把上面的操作临时保存成 patch 文件，存在 .git/rebase 目录下；
            然后，把 dev 分支更新到最新的 master 分支；
            最后，把上面保存的 patch 文件应用到 dev 分支上；
        在 rebase 的过程中，也许会出现冲突 conflict。在这种情况，git 会停止 rebase 并会让你去解决冲突。在解决完冲突后，用 git add 命令去更新这些内容。
        在 git rebase --continue 这样 git 会继续应用余下的 patch 补丁文件。
        
    结论: 只要你的分支上需要 rebase 的所有 commits 历史还没有被 push 过，就可以安全地使用 git-rebase来操作。

如何避免过多的merge log
  使用git pull --rebase 方式拉取代码
  git reset 节点 撤销上一次的commit 在同步代码重新提交

合并这次提交到上一次
    git commit --amend
    git commit --amend --no-edit
 */