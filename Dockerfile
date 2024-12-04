# 使用Nginx作为镜像
FROM nginx
# 将宿主主机的项目入口文件复制进容器里的nginx默认入口文件
COPY dist/ /home/workspace/
# 容器对外暴露80端口
EXPOSE 80
# 启动Nginx服务器
# CMD ["nginx", "-g", "daemon off;"]
