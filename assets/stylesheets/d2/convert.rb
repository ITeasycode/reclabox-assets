#!/usr/bin/ruby

s = File.open(ARGV[0]).read

s.gsub!(/url\('\.\.\/fonts\/((roboto|icon-font-3)\/.*?)'\)/, 'url(\'<%= asset_path("d2/\\1") %>\')')
s.gsub!(/url\('\.\.\/img\/(.*?)(svg)'\)/, 'url(\'<%= asset_path("d2/icon-svg/\\1\\2") %>\')')
s.gsub!(/url\('\.\.\/img\/(.*?)(png|jpg|jpeg)'\)/, 'url(\'<%= asset_path("d2/img-site/\\1\\2") %>\')')

s.gsub!(/url\("\.\.\/fonts\/((roboto|icon-font-3)\/.*?)"\)/, 'url("<%= asset_path("d2/\\1") %>")')
s.gsub!(/url\("\.\.\/img\/(.*?)(svg)"\)/, 'url("<%= asset_path("d2/icon-svg/\\1\\2") %>")')
s.gsub!(/url\("\.\.\/img\/(.*?)(png|jpg|jpeg)"\)/, 'url("<%= asset_path("d2/img-site/\\1\\2") %>")')

File.open(ARGV[0]+'.erb', 'w+') do |f|
  f.puts s
end

